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
exports.DepartmentController = void 0;
const departments_1 = require("../models/departments");
class DepartmentController {
    constructor() {
        this.departmentsList = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const departments = yield this.departmentModel.departmentListe();
                res.status(200).json(departments);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
        this.departmentModel = new departments_1.DepartmentModel();
    }
}
exports.DepartmentController = DepartmentController;
