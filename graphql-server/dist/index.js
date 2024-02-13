"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const load_files_1 = require("@graphql-tools/load-files");
const schema_1 = require("./schema/schema");
const database_1 = require("./db/database");
const path_1 = __importDefault(require("path"));
const interestResolver_1 = require("./resolvers/interestResolver");
// Load and merge type definitions
const typesArray = (0, load_files_1.loadFilesSync)(path_1.default.join(__dirname, "schema"), {
    extensions: ["gql"],
});
// const typeDefs = mergeTypeDefs(typesArray)
// Load and merge resolvers
// const resolversArray = loadFilesSync(path.join(__dirname, "resolvers"))
// const resolvers = mergeResolvers(resolversArray)
//const resolvers = require("./resolvers/interestResolver")
const server = new apollo_server_1.ApolloServer({
    typeDefs: schema_1.typeDefs,
    resolvers: interestResolver_1.resolvers,
    context: () => ({ db: database_1.db }),
});
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
