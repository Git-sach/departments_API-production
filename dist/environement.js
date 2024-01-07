"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.DB_HOST = exports.DB_PASSWORD = exports.DB_USER = exports.DB_NAME = void 0;
// BDD
exports.DB_NAME = process.env.DB_NAME;
exports.DB_USER = process.env.DB_USER;
exports.DB_PASSWORD = process.env.DB_PASSWORD;
exports.DB_HOST = process.env.DB_HOST;
// Express
exports.PORT = process.env.PORT;
