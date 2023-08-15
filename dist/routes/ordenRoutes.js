"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ordenController_1 = __importDefault(require("../controller/ordenController"));
class OrdenRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/tecnicos', ordenController_1.default.listTecnicos);
    }
}
//Exportamos el enrutador del objeto usuarios con 
const ordenRoute = new OrdenRoutes();
exports.default = ordenRoute.router;
//# sourceMappingURL=ordenRoutes.js.map