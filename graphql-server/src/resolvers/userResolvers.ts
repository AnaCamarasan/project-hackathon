import { Database } from "sqlite3"
import { getUsers, createUser } from "../services/userService"

export const userResolvers = {
  Query: {
    users: async (_: any, __: any, { db }: { db: Database }) => getUsers(db),
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
