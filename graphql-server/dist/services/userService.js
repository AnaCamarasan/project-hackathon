"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUsers = void 0;
const getUsers = (db) => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM users", [], (err, rows) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(rows);
            }
        });
    });
};
exports.getUsers = getUsers;
const createUser = (db, firstName, lastName, email, password, age, phoneNumber, region, role, gender) => {
    return new Promise((resolve, reject) => {
        const insert = `INSERT INTO users (name, email) VALUES (?, ?)`;
        db.run(insert, [
            firstName,
            lastName,
            email,
            password,
            age,
            phoneNumber,
            region,
            role,
            gender,
        ], function () {
            if (this.lastID) {
                resolve({
                    id: this.lastID,
                    firstName,
                    lastName,
                    email,
                    password,
                    age,
                    phoneNumber,
                    region,
                    role,
                    gender,
                });
            }
            else {
                reject(new Error("Failed to create user"));
            }
        });
    });
};
exports.createUser = createUser;
