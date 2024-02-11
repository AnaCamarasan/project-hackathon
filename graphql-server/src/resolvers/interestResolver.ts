import { Database } from "sqlite3"
import { getInterests } from "../services/interestService"

export const interestResolvers = {
  Query: {
    interests: async (_: any, __: any, { db }: { db: Database }) =>
      getInterests(db),
  },
}
