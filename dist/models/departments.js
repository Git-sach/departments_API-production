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
exports.DepartmentModel = void 0;
const department_1 = require("../database/model/department");
const region_1 = require("../database/model/region");
class DepartmentModel {
    departmentListe() {
        return __awaiter(this, void 0, void 0, function* () {
            const departmentsResponse = yield department_1.Department.findAll({
                include: [
                    {
                        model: region_1.Region,
                        attributes: { exclude: ["id"] },
                    },
                ],
                raw: true,
                attributes: { exclude: ["regionId"] },
            });
            departmentsResponse.forEach((department) => {
                department["region"] = department["region.name"];
                delete department["region.name"];
            });
            return departmentsResponse;
        });
    }
}
exports.DepartmentModel = DepartmentModel;
