"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema_1 = require("./schema/schema");
const database_1 = require("./db/database");
const resolvers_1 = require("./resolvers/resolvers");
const server = new apollo_server_1.ApolloServer({
    typeDefs: schema_1.typeDefs,
    resolvers: resolvers_1.resolvers,
    context: () => ({ db: database_1.db }),
});
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
