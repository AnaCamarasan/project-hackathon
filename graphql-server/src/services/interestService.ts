import { Database } from "sqlite3"

export const getInterests = (db: Database): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM interests", [], (err, rows) => {
      if (err) {
        reject(err)
      } else {
        resolve(rows)
      }
    })
  })
}
