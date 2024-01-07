"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const environement_1 = require("../environement");
const Sequelize = require('sequelize');
const sequelizeConnection = new Sequelize(environement_1.DB_NAME, environement_1.DB_USER, environement_1.DB_PASSWORD, {
    dialect: "mysql",
    host: environement_1.DB_HOST,
    logging: false,
    define: {
        freezeTableName: true
    }
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelizeConnection.authenticate();
        console.log('Connection to database has been established successfully.');
    }
    catch (err) {
        console.log('connection failed');
    }
}))();
module.exports = sequelizeConnection;
