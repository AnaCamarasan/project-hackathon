import { Database } from "sqlite3"
import { getInterests } from "../services/interestService"
import { registerUser, getUsers, login } from "../services/userService"
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
    registerUser: async (
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
      return registerUser(
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
    login: async (
      _: any,
      args: { email: string; password: string },
      { db }: { db: Database }
    ) => {
      const { email, password } = args
      login(db, email, password)
    },
  },
}
