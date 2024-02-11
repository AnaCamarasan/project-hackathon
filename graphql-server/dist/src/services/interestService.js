"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInterests = void 0;
const getInterests = (db) => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM interests", [], (err, rows) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(rows);
            }
        });
    });
};
exports.getInterests = getInterests;
