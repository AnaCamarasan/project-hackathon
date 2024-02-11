import { ApolloServer, gql } from "apollo-server"
import sqlite3, { Database } from "sqlite3"

// Connect to SQLite database
const db: Database = new sqlite3.Database("./mydatabase.db", (err) => {
  if (err) {
    console.error("Error opening database", err)
  } else {
    console.log("Connected to the SQLite database.")
  }
})

// GraphQL schema
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User!]!
  }
`

interface User {
  id: number
  name: string
  email: string
}

// Resolvers define how to fetch the types defined in the schema
const resolvers = {
  Query: {
    users: (): Promise<User[]> => {
      return new Promise((resolve, reject) => {
        db.all("SELECT * FROM users;", [], (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows as User[])
          }
        })
      })
    },
  },
}

// Create an instance of ApolloServer
const server: ApolloServer = new ApolloServer({ typeDefs, resolvers })

// Start the server
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
