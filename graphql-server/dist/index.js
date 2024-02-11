"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const sqlite3_1 = __importDefault(require("sqlite3"));
// Connect to SQLite database
const db = new sqlite3_1.default.Database("./mydatabase.db", (err) => {
    if (err) {
        console.error("Error opening database", err);
    }
    else {
        console.log("Connected to the SQLite database.");
    }
});
// GraphQL schema
const typeDefs = (0, apollo_server_1.gql) `
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User!]!
  }
`;
// Resolvers define how to fetch the types defined in the schema
const resolvers = {
    Query: {
        users: () => {
            return new Promise((resolve, reject) => {
                db.all("SELECT * FROM users;", [], (err, rows) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(rows);
                    }
                });
            });
        },
    },
};
// Create an instance of ApolloServer
const server = new apollo_server_1.ApolloServer({ typeDefs, resolvers });
// Start the server
server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
