"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const departments_1 = require("./controllers/departments");
const environement_1 = require("./environement");
const cors = require("cors");
const app = (0, express_1.default)();
const morgan = require("morgan");
const path = require("path");
app.use(morgan("short"));
app.use(express_1.default.static(path.join(__dirname, "../public")));
app.use(cors());
const departmentController = new departments_1.DepartmentController();
app.get("/departments", departmentController.departmentsList);
// faire avec un query param plutot
app.get("/departments/:name", departmentController.departmentsList);
app.get("*", (req, res) => {
    res.json({ test: "ok" });
});
app.listen(environement_1.PORT);
// pour la mise en production, penser a faire npm install --production pour ne pas installer toutes les dépendances inutiles
// il faudra d'ailleur pousser sur le VPS que le index.js
