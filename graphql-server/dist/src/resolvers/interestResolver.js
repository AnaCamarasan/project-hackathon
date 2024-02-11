"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interestResolvers = void 0;
const interestService_1 = require("../services/interestService");
exports.interestResolvers = {
    Query: {
        interests: async (_, __, { db }) => (0, interestService_1.getInterests)(db),
    },
};
