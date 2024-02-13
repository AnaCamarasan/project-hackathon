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

  type Query {
    getInterests: [Interest!]!
    getUsers: [User!]!
    getRegions: [Region!]!
  }

  type Mutation {
    createUser(
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
  }
`
