"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const calderaController_1 = __importDefault(require("../controller/calderaController"));
class CalderaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/list', calderaController_1.default.list);
        this.router.post('/', calderaController_1.default.addCaldera);
        this.router.get('/:id', calderaController_1.default.find);
        // this.router.put('/:id',userController.update);
        // this.router.delete('/:id',userController.delete);
    }
}
//Exportamos el enrutador del objeto usuarios con 
const calderaRoutes = new CalderaRoutes();
exports.default = calderaRoutes.router;
//# sourceMappingURL=calderaRoutes.js.map