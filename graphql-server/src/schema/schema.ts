import { gql } from "apollo-server"

export const typeDefs = gql`
  type Interest {
    id: ID!
    interest_name: String!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    age: Int!
    phoneNumber: String!
    region: String
    role: String
    gender: String
  }

  type Region {
    id: ID!
    name: String!
  }

  type LoginData {
    id: ID!
    email: String!
    password: String!
  }

  type AuthPayload {
    token: String
    user: LoginData
  }

  type Query {
    getInterests: [Interest!]!
    getUsers: [User!]!
    getRegions: [Region!]!
  }

  type Mutation {
    registerUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      age: Int!
      phoneNumber: String!
      region: String
      role: String
      gender: String
    ): User
    login(email: String!, password: String!): AuthPayload
  }
`
