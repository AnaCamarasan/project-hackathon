"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDefs = (0, apollo_server_1.gql) `
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
`;
