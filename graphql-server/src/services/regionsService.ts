import { Database } from "sqlite3"

export const getRegions = (db: Database): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM regions", [], (err, rows) => {
      if (err) {
        reject(err)
      } else {
        resolve(rows)
      }
    })
  })
}
