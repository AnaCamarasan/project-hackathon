"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const load_files_1 = require("@graphql-tools/load-files");
const merge_1 = require("@graphql-tools/merge");
const database_1 = require("../db/database");
const path_1 = __importDefault(require("path"));
// Load and merge type definitions
const typesArray = (0, load_files_1.loadFilesSync)(path_1.default.join(__dirname, "./schema"), {
    extensions: ["gql"],
});
const typeDefs = (0, merge_1.mergeTypeDefs)(typesArray);
// Load and merge resolvers
const resolversArray = (0, load_files_1.loadFilesSync)(path_1.default.join(__dirname, "./resolvers"));
const resolvers = (0, merge_1.mergeResolvers)(resolversArray);
const server = new apollo_server_1.ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db: database_1.db }),
});
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
