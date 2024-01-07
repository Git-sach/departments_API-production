"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
const { Sequelize, Model } = require('sequelize');
const sequelize = require('../index');
class Department extends Model {
}
exports.Department = Department;
Department.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    code: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    prefecture: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    svg_path: {
        type: Sequelize.BOOLEAN
    },
    viewBox00: {
        type: Sequelize.INTEGER
    },
    viewBox01: {
        type: Sequelize.INTEGER
    },
    viewBox10: {
        type: Sequelize.INTEGER
    },
    viewBox11: {
        type: Sequelize.INTEGER
    }
}, {
    sequelize,
    modelName: 'departments',
    timestamps: false
});
// module.exports = Department;
