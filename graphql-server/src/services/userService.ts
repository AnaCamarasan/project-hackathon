import { Database } from "sqlite3"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

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

export const registerUser = (
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
    const insert = `INSERT INTO users (
      firstName, lastName, email, password, age, phoneNumber, region, role, gender) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`

    const hashedPassword = bcrypt.hash(password, 10)

    db.run(
      insert,
      [
        firstName,
        lastName,
        email,
        hashedPassword,
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
            hashedPassword,
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

interface LoginData {
  id: number
  email: string
  password: string
}

export const getUserByEmail = async (
  db: Database,
  email: string
): Promise<any> => {
  const result = await new Promise((resolve, reject) => {
    db.get(
      "SELECT id, email, password FROM users WHERE email = ?",
      [email],
      (err, row: LoginData) => {
        if (err) {
          reject(err)
        } else if (!row) {
          resolve(null)
        } else {
          resolve({
            id: row.id,
            email: row.email,
            hash: row.password,
          })
        }
      }
    )
  })

  return result
}

export const validatePassword = async (
  db: Database,
  email: string,
  password: string
): Promise<boolean> => {
  const user = await getUserByEmail(db, email)
  if (!user) {
    return false
  }

  const valid = await bcrypt.compare(password, user.hash)
  return valid
}

export const login = async (
  db: Database,
  email: string,
  password: string
): Promise<{ token: string; user: LoginData } | null> => {
  const user = await getUserByEmail(db, email)
  if (!user) {
    throw Error("user not found")
  }

  const valid = await validatePassword(db, email, password)
  if (!valid) {
    throw Error("passwords don't match")
  }

  const token = jwt.sign(
    { userId: user.id },
    // @ts-ignore
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  )
  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      password: user.hash,
    },
  }
}
