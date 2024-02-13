"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userResolvers = void 0;
const userService_1 = require("../services/userService");
exports.userResolvers = {
    Query: {
        users: async (_, __, { db }) => (0, userService_1.getUsers)(db),
    },
    Mutation: {
        createUser: async (_, args, { db }) => {
            const { firstName, lastName, email, password, age, phoneNumber, region, role, gender, } = args;
            return (0, userService_1.createUser)(db, firstName, lastName, email, password, age, phoneNumber, region, role, gender);
        },
    },
};
