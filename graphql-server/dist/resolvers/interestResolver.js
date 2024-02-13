"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const interestService_1 = require("../services/interestService");
exports.resolvers = {
    Query: {
        getInterests: async (_, __, { db }) => (0, interestService_1.getInterests)(db),
    },
};
