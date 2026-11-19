import { createServer } from "node:http";
import { readFile, realpath } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import { createDevelopmentReload } from "./dev-reload.mjs";
import db from "./database/db.js";

const publicDirectory = path.resolve(
  fileURLToPath(new URL("./public/", import.meta.url)),
);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".json": "application/json; charset=utf-8",
};

function sendJson(response, status, data) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
  });
  response.end(JSON.stringify(data));
}

async function readJsonBody(request) {
  const chunks = [];
  let size = 0;

  for await (const chunk of request) {
    size += chunk.length;

    if (size > 10000) {
      throw new Error("Request is too large.");
    }

    chunks.push(chunk);
  }

  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

function getOrders() {
  const orders = db
    .prepare(
      `
    SELECT id, order_date, total
    FROM Orders
    ORDER BY id DESC
  `,
    )
    .all();

  const getItems = db.prepare(`
    SELECT size, quantity, price
    FROM OrderItems
    WHERE order_id = ?
  `);

  return orders.map((order) => ({
    ...order,
    items: getItems.all(order.id),
  }));
}

function saveOrder(items) {
  const allowedSizes = ["S", "M", "L", "XL"];

  if (!Array.isArray(items) || items.length === 0 || items.length > 20) {
    throw new Error("Please provide valid order items.");
  }

  const product = db
    .prepare("SELECT id, price FROM Products WHERE id = ?")
    .get(1);

  if (!product) {
    throw new Error("The product was not found.");
  }

  for (const item of items) {
    if (
      !allowedSizes.includes(item.size) ||
      !Number.isInteger(item.quantity) ||
      item.quantity < 1 ||
      item.quantity > 10
    ) {
      throw new Error("An item has an invalid size or quantity.");
    }
  }

  const total =
    Math.round(
      items.reduce((sum, item) => sum + product.price * item.quantity, 0) * 100,
    ) / 100;

  db.exec("BEGIN");

  try {
    const orderResult = db
      .prepare("INSERT INTO Orders (total) VALUES (?)")
      .run(total);

    const orderId = Number(orderResult.lastInsertRowid);

    const insertItem = db.prepare(`
      INSERT INTO OrderItems
      (order_id, product_id, size, quantity, price)
      VALUES (?, ?, ?, ?, ?)
    `);

    for (const item of items) {
      insertItem.run(
        orderId,
        product.id,
        item.size,
        item.quantity,
        product.price,
      );
    }

    db.exec("COMMIT");

    return { orderId, total };
  } catch (error) {
    db.exec("ROLLBACK");
    throw error;
  }
}

// Local server only. GitHub Pages serves the unchanged public/ files.
export function createApp({
  development = false,
  publicRoot = publicDirectory,
} = {}) {
  const reload = development ? createDevelopmentReload(publicRoot) : undefined;

  const app = createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(
        new URL(request.url, "http://localhost").pathname,
      );

      // SQLite API routes
      if (pathname === "/api/orders") {
        if (request.method === "GET") {
          sendJson(response, 200, getOrders());
          return;
        }

        if (request.method === "POST") {
          try {
            const body = await readJsonBody(request);
            const order = saveOrder(body.items);

            sendJson(response, 201, {
              message: "Order saved successfully.",
              ...order,
            });
          } catch (error) {
            sendJson(response, 400, {
              error: error.message || "Unable to save order.",
            });
          }

          return;
        }

        response.writeHead(405, { Allow: "GET, POST" });
        response.end("Method not allowed");
        return;
      }

      // Serve website files
      if (!["GET", "HEAD"].includes(request.method)) {
        response.writeHead(405, { Allow: "GET, HEAD" });
        response.end("Method not allowed");
        return;
      }

      if (reload?.handle(pathname, request, response)) return;

      const segments = pathname.split("/");

      if (
        segments.some((segment) => segment.startsWith(".")) ||
        pathname.includes("\\") ||
        pathname.includes("\0")
      ) {
        response.writeHead(404);
        response.end("File not found");
        return;
      }

      const filename = path.resolve(
        publicRoot,
        `.${pathname.endsWith("/") ? `${pathname}index.html` : pathname}`,
      );

      const resolvedRoot = await realpath(publicRoot);
      const resolvedFile = await realpath(filename);

      if (!resolvedFile.startsWith(`${resolvedRoot}${path.sep}`)) {
        response.writeHead(404);
        response.end("File not found");
        return;
      }

      const content = await readFile(resolvedFile);

      const servedContent =
        reload && path.extname(filename) === ".html"
          ? reload.inject(content)
          : content;

      response.writeHead(200, {
        "Content-Type":
          types[path.extname(filename)] ?? "application/octet-stream",
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      });

      response.end(request.method === "HEAD" ? undefined : servedContent);
    } catch (error) {
      response.writeHead(error instanceof URIError ? 400 : 404);
      response.end(
        error instanceof URIError ? "Invalid file path" : "File not found",
      );
    }
  });

  app.on("close", () => reload?.close());

  return app;
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  const port = Number(process.env.PORT ?? 5173);
  const host = process.env.HOST ?? "127.0.0.1";
  const development = process.argv.includes("--dev");

  const app = createApp({ development });

  app.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      console.error(
        `Port ${port} is already in use. Stop the other preview or choose another PORT.`,
      );
    } else {
      console.error(error.message);
    }

    process.exitCode = 1;
  });

  app.listen(port, host, () => {
    console.log(`Brand studio: http://${host}:${port}`);

    console.log(
      development
        ? "Development mode: save public/ files to refresh the browser automatically."
        : "Plain preview mode: refresh the browser yourself after saving files.",
    );

    console.log(
      "SQLite is connected. Orders are saved locally in data/store.db.",
    );

    console.log(
      "Press Ctrl+C to stop. Local changes do not publish to GitHub Pages.",
    );
  });
}
