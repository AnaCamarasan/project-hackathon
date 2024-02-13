import { Database } from "sqlite3"
import { getInterests } from "../services/interestService"
import { createUser, getUsers } from "../services/userService"
import { getRegions } from "../services/regionsService"

export const resolvers = {
  Query: {
    getInterests: async (_: any, __: any, { db }: { db: Database }) =>
      getInterests(db),
    getUsers: async (_: any, __: any, { db }: { db: Database }) => getUsers(db),
    getRegions: async (_: any, __: any, { db }: { db: Database }) =>
      getRegions(db),
  },
  Mutation: {
    createUser: async (
      _: any,
      args: {
        firstName: string
        lastName: string
        email: string
        password: string
        age: number
        phoneNumber: string
        region: string
        role: string
        gender: string
      },
      { db }: { db: Database }
    ) => {
      const {
        firstName,
        lastName,
        email,
        password,
        age,
        phoneNumber,
        region,
        role,
        gender,
      } = args
      return createUser(
        db,
        firstName,
        lastName,
        email,
        password,
        age,
        phoneNumber,
        region,
        role,
        gender
      )
    },
  },
}
