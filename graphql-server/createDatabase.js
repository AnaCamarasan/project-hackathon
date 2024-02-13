// createDatabase.js
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./mydatabase.db', (err) => {
  if (err) {
    console.error('Error opening database', err);
  } else {
    console.log('Database opened');
    db.run(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        age INTEGER NOT NULL,
        phoneNumber TEXT NOT NULL,
        region TEXT NOT NULL,
        role TEXT NOT NULL,
        gender TEXT NOT NULL
      );`,
      (err) => {
        if (err) {
          console.error('Error creating table users', err);
        } else {
          console.log('Table users created');
        }
      }
    );
    
    db.run(
      `CREATE TABLE IF NOT EXISTS interests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        interest_name TEXT NOT NULL UNIQUE
    );`,
      (err) => {
        if (err) {
          console.error('Error creating table interests', err);
        } else {
          console.log('Table intrests created');
        }
      }
    );

    db.run(
      `CREATE TABLE IF NOT EXISTS user_interests (
        user_id INTEGER NOT NULL,
        interest_id INTEGER NOT NULL,
        PRIMARY KEY (user_id, interest_id),
        FOREIGN KEY (user_id) REFERENCES users (id),
        FOREIGN KEY (interest_id) REFERENCES interests (id)
    );`,
      (err) => {
        if (err) {
          console.error('Error creating table user_interests', err);
        } else {
          console.log('Table user_intrests created');
        }
      }
    );
    
    db.run(
      `CREATE TABLE IF NOT EXISTS news (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        excerpt TEXT NOT NULL,
        imageUrl TEXT NOT NULL
    );`,
      (err) => {
        if (err) {
          console.error('Error creating table news', err);
        } else {
          console.log('Table news created');
        }
      }
    );

    db.run(
      `CREATE TABLE IF NOT EXISTS regions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
    );`,
      (err) => {
        if (err) {
          console.error('Error creating table regions', err);
        } else {
          console.log('Table regions created');
        }
      }
    );
    
  }
});
