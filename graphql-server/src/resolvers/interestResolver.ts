import { Database } from "sqlite3"
import { getInterests } from "../services/interestService"

export const resolvers = {
  Query: {
    getInterests: async (_: any, __: any, { db }: { db: Database }) =>
      getInterests(db),
  },
}
