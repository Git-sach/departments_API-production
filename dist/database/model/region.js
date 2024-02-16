"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Region = void 0;
const { Sequelize, Model } = require("sequelize");
const sequelize = require("../index");
class Region extends Model {
}
exports.Region = Region;
Region.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: "regions",
    timestamps: false,
});
