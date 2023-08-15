"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rolController_1 = __importDefault(require("../controller/rolController"));
class RolROutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/list', rolController_1.default.list);
        this.router.get('/tecnicos', rolController_1.default.listTecnicos);
    }
}
//Exportamos el enrutador del objeto usuarios con 
const rolRoutes = new RolROutes();
exports.default = rolRoutes.router;
//# sourceMappingURL=rolRoutes.js.map