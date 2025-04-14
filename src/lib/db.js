import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'db', 'dua_main.sqlite');

let db;

try {
  db = new Database(dbPath, { readonly: true });
  
} catch (error) {
  console.error(' Failed to open DB:', error);
}

export default db;
