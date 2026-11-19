# Everyday — White T-Shirt Storefront

A classroom e-commerce project for the Everyday brand. The website features a white T-shirt storefront, styling suggestions, a shopping bag, and a simulated checkout connected to a local SQLite database.

## Project Links

- **Live Website:** https://jeshanfahmad.github.io/117-white-tshirt-reasearch/
- **GitHub Repository:** https://github.com/JeshanFAhmad/117-white-tshirt-reasearch
- **T-shirt Research:** [Research.md](Research.md)
- **Project Specification:** [SPEC.md](SPEC.md)

## Features

- White T-shirt product page with a fictional price of $28.
- Size selection: S, M, L, and XL.
- Shopping bag that displays selected sizes and quantities.
- Simulated checkout that saves orders to SQLite.
- Order confirmation showing the order number and total.
- Styling suggestions based on the visitor's selection.
- Local API for saving and viewing orders.

This is a classroom demonstration. It does not process real payments or collect personal information.

## Technologies

- HTML
- CSS
- JavaScript
- Node.js
- SQLite using Node.js's built-in `node:sqlite` module
- Playwright for browser testing

## Requirements

Install:

- Node.js 22.16 or newer, or Node.js 24 or newer.
- npm (included with Node.js).

The project uses Node.js's built-in SQLite support, so an additional SQLite npm package is not required.

## Installation

Clone the repository:

```bash
git clone https://github.com/JeshanFAhmad/117-white-tshirt-reasearch.git
```

Enter the project folder:

```bash
cd 117-white-tshirt-reasearch
```

Install the project dependencies:

```bash
npm ci
```

## Running the Website and SQLite

Start the local development server:

```bash
npm run dev
```

Open the address in your browser:

```text
http://127.0.0.1:5173
```

The SQLite database is initialized automatically when the server starts.

The database file is created at:

```text
data/store.db
```

The database folder and file are generated automatically if they do not exist.

**Important:** Add `/data/` to `.gitignore` so your locally generated database is not accidentally committed. The source code and schema are what another person needs to recreate the database.

## Database Structure

The SQLite database contains three tables.

| Table | Purpose |
|---|---|
| Products | Stores product information, including name, price, and color. |
| Orders | Stores order IDs, dates, and order totals. |
| OrderItems | Stores the products, sizes, quantities, and prices associated with each order. |

The database schema is located at:

```text
database/schema.sql
```

The database connection is handled by:

```text
database/db.js
```

The schema creates the tables and inserts the Everyday White T-shirt product at a fictional price of $28.

## How Checkout Works

1. Open the local website.
2. Select a T-shirt size.
3. Add one or more shirts to the shopping bag.
4. Select **Place demo order**.
5. The website sends the order to the local Node.js server.
6. The server checks the selected sizes and quantities.
7. The server calculates the order total using the product price stored in SQLite.
8. The order and its items are saved in the database.
9. The website displays an order confirmation.

Orders are saved locally and remain in the database after the browser or server is restarted, provided the database file is preserved.

## Verifying SQLite Persistence

The server provides an endpoint for viewing saved orders.

With the local server running, open:

```text
http://127.0.0.1:5173/api/orders
```

The endpoint returns saved orders and their associated items in JSON format.

To verify persistence:

1. Start the server using `npm run dev`.
2. Place a demo order through the website.
3. Confirm that the website displays an order number and total.
4. Stop the server by pressing `Ctrl+C`.
5. Start the server again using `npm run dev`.
6. Open `http://127.0.0.1:5173/api/orders`.
7. Confirm that the previously saved order still appears.

This verifies that the order was stored in the SQLite database rather than only held temporarily in JavaScript.

## Project Files

| File or Folder | Purpose |
|---|---|
| `public/index.html` | Main storefront page. |
| `public/shop.js` | Shopping bag and checkout functionality. |
| `public/styles.css` | Storefront styling. |
| `server.mjs` | Local web server and SQLite order API. |
| `database/schema.sql` | SQLite table definitions and product data. |
| `database/db.js` | SQLite database connection and initialization. |
| `data/store.db` | Generated SQLite database containing saved orders. |
| `README.md` | Project setup and documentation. |
| `SPEC.md` | Project specifications and decisions. |
| `Research.md` | T-shirt research documentation. |

## Testing

Run all prepared project checks:

```bash
npm run check
```

This command runs:

- Prettier formatting checks.
- ESLint and HTML/CSS validation.
- Node.js tests.
- Playwright browser tests.

To automatically format the project:

```bash
npm run format
```

The prepared checks cover the existing project tests. The manual SQLite persistence procedure above separately verifies that saved orders survive a server restart.

## GitHub Pages and Local SQLite

The published GitHub Pages website is a static version of the project.

GitHub Pages can host the HTML, CSS, JavaScript, and images, but it cannot run the Node.js server or access the local SQLite database.

The SQLite checkout functionality therefore runs locally through:

```text
http://127.0.0.1:5173
```

The published website is available at:

https://jeshanfahmad.github.io/117-white-tshirt-reasearch/

## Limitations

- Product information and prices are fictional.
- Checkout is simulated.
- No real payments are processed.
- No customer personal information is collected.
- SQLite data is stored locally on the computer running the server.
- The local SQLite database is not shared through GitHub Pages.

This project demonstrates a basic connection between a storefront, a Node.js server, and a persistent SQLite database.
