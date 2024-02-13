import { ApolloServer } from "apollo-server"
import { typeDefs } from "./schema/schema"
import { db } from "./db/database"
import { resolvers } from "./resolvers/resolvers"

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ db }),
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
