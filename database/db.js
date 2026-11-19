import { DatabaseSync } from "node:sqlite";
import { readFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.dirname(currentDir);
const dataDir = path.join(projectDir, "data");

mkdirSync(dataDir, { recursive: true });

const db = new DatabaseSync(path.join(dataDir, "store.db"));

db.exec("PRAGMA foreign_keys = ON");

const schema = readFileSync(path.join(currentDir, "schema.sql"), "utf8");

db.exec(schema);

export default db;
