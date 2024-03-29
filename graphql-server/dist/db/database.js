"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sqlite3_1 = __importDefault(require("sqlite3"));
exports.db = new sqlite3_1.default.Database("./mydatabase.db", (err) => {
    if (err) {
        console.error("Error opening database", err);
    }
    else {
        console.log("Connected to the SQLite database.");
    }
});
