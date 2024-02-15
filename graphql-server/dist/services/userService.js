"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.validatePassword = exports.getUserByEmail = exports.registerUser = exports.getUsers = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
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
const registerUser = (db, firstName, lastName, email, password, age, phoneNumber, region, role, gender) => {
    return new Promise((resolve, reject) => {
        const insert = `INSERT INTO users (
      firstName, lastName, email, password, age, phoneNumber, region, role, gender) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const hashedPassword = bcrypt_1.default.hash(password, 10);
        db.run(insert, [
            firstName,
            lastName,
            email,
            hashedPassword,
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
                    hashedPassword,
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
exports.registerUser = registerUser;
const getUserByEmail = async (db, email) => {
    const result = await new Promise((resolve, reject) => {
        db.get("SELECT id, email, password FROM users WHERE email = ?", [email], (err, row) => {
            if (err) {
                reject(err);
            }
            else if (!row) {
                resolve(null); // User not found
            }
            else {
                resolve({
                    id: row.id,
                    email: row.email,
                    hash: row.password,
                });
            }
        });
    });
    return result;
};
exports.getUserByEmail = getUserByEmail;
const validatePassword = async (db, email, password) => {
    const user = await (0, exports.getUserByEmail)(db, email);
    if (!user) {
        return false; // Incorrect email or user not found
    }
    // Compare submitted password with the stored hash (never return the hash)
    const valid = await bcrypt_1.default.compare(password, user.hash);
    console.log(valid);
    return valid;
};
exports.validatePassword = validatePassword;
const login = async (db, email, password) => {
    // 1. Retrieve user by email with secure password storage
    const user = await (0, exports.getUserByEmail)(db, email);
    if (!user) {
        return null; // User not found or incorrect email
    }
    // 2. Validate password using bcrypt.compare
    const valid = await (0, exports.validatePassword)(db, email, password);
    if (!valid) {
        return null; // Invalid password
    }
    // 3. Generate JWT token (excluding sensitive information)
    const token = jsonwebtoken_1.default.sign({ userId: user.id }, 
    // @ts-ignore
    process.env.JWT_SECRET, { expiresIn: "30d" } // Adjust expiration time as needed
    );
    // 4. Return token and user data (excluding secure fields)
    return {
        token,
        user: {
            id: user.id,
            email: user.email,
            password: user.hash,
        },
    };
};
exports.login = login;
// export const login = (db: Database, email: string): Promise<any> => {
//     return new Promise ((resolve, reject) =>{
//       const user = db.get('SELECT * FROM users WHERE email = ?', email);
//       if (!user) {
//         throw new Error('No such user found');
//       }
//       const valid = await bcrypt.compare(password, user.password);
//       if (!valid) {
//         throw new Error('Invalid password');
//       }
//       // 3. Generate a JSON Web Token
//       const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
//         expiresIn: '30d', // token will expire in 30 days
//       });
//     })
//     login: async (_, { username, password }, { db }) => {
//       // 1. Check if the user exists in the database
//       const user = await db.get('SELECT * FROM users WHERE username = ?', username);
//       if (!user) {
//         throw new Error('No such user found');
//       }
//       // 2. Compare submitted password with the stored hash
//       const valid = await bcrypt.compare(password, user.password);
//       if (!valid) {
//         throw new Error('Invalid password');
//       }
//       // 3. Generate a JSON Web Token
//       const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
//         expiresIn: '30d', // token will expire in 30 days
//       });
//       // 4. Return the token and user information
//       return {
//         token,
//         user,
//       };
//   },
// };
