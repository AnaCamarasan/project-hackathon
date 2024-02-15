"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const interestService_1 = require("../services/interestService");
const userService_1 = require("../services/userService");
const regionsService_1 = require("../services/regionsService");
exports.resolvers = {
    Query: {
        getInterests: async (_, __, { db }) => (0, interestService_1.getInterests)(db),
        getUsers: async (_, __, { db }) => (0, userService_1.getUsers)(db),
        getRegions: async (_, __, { db }) => (0, regionsService_1.getRegions)(db),
    },
    Mutation: {
        registerUser: async (_, args, { db }) => {
            const { firstName, lastName, email, password, age, phoneNumber, region, role, gender, } = args;
            return (0, userService_1.registerUser)(db, firstName, lastName, email, password, age, phoneNumber, region, role, gender);
        },
        login: async (_, args, { db }) => {
            const { email, password } = args;
            (0, userService_1.login)(db, email, password);
        },
    },
};
