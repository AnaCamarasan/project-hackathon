"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegions = void 0;
const getRegions = (db) => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM regions", [], (err, rows) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(rows);
            }
        });
    });
};
exports.getRegions = getRegions;
