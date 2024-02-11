import { Database } from "sqlite3"

export const getUsers = (db: Database): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM users", [], (err, rows) => {
      if (err) {
        reject(err)
      } else {
        resolve(rows)
      }
    })
  })
}

export const createUser = (
  db: Database,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  age: number,
  phoneNumber: string,
  region: string,
  role: string,
  gender: string
): Promise<any> => {
  return new Promise((resolve, reject) => {
    const insert = `INSERT INTO users (name, email) VALUES (?, ?)`
    db.run(
      insert,
      [
        firstName,
        lastName,
        email,
        password,
        age,
        phoneNumber,
        region,
        role,
        gender,
      ],
      function (this: any) {
        if (this.lastID) {
          resolve({
            id: this.lastID,
            firstName,
            lastName,
            email,
            password,
            age,
            phoneNumber,
            region,
            role,
            gender,
          })
        } else {
          reject(new Error("Failed to create user"))
        }
      }
    )
  })
}
