import sqlite3, { Database } from "sqlite3"

export const db: Database = new sqlite3.Database("./mydatabase.db", (err) => {
  if (err) {
    console.error("Error opening database", err)
  } else {
    console.log("Connected to the SQLite database.")
  }
})
