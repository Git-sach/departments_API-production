"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentModel = void 0;
const department_1 = require("../database/model/department");
class DepartmentModel {
    departmentListe() {
        return department_1.Department.findAll();
    }
}
exports.DepartmentModel = DepartmentModel;
// export const departmentListe = () => {
//     return Department.findAll();
// };
