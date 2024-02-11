import { ApolloServer } from "apollo-server"
import { loadFilesSync } from "@graphql-tools/load-files"
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge"
import { db } from "../db/database"
import path from "path"

// Load and merge type definitions
const typesArray = loadFilesSync(path.join(__dirname, "./schema"), {
  extensions: ["gql"],
})
const typeDefs = mergeTypeDefs(typesArray)

// Load and merge resolvers
const resolversArray = loadFilesSync(path.join(__dirname, "./resolvers"))
const resolvers = mergeResolvers(resolversArray)

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ db }),
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
