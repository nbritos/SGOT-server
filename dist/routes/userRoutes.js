"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = __importDefault(require("../controller/userController"));
const express_1 = require("express");
const verifyToken_1 = require("../lib/verifyToken");
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //ingreso
        this.router.post('/login', userController_1.default.login);
        //metodos crud
        this.router.get('/list', verifyToken_1.TokenValidation, userController_1.default.list);
        this.router.get('/:id', userController_1.default.find);
        this.router.post('/add', userController_1.default.addUser);
        this.router.put('/:id', userController_1.default.update);
        this.router.delete('/:id', userController_1.default.delete);
    }
}
//Exportamos el enrutador del objeto usuarios con 
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
//# sourceMappingURL=userRoutes.js.map