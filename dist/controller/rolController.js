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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rolRepo_1 = __importDefault(require("../repository/rolRepo"));
class RolController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.header("Authorization")); //Observamos el valor del token
            console.log(req.body);
            const roles = yield rolRepo_1.default.listar();
            return res.json(roles);
        });
    }
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const rol = yield rolRepo_1.default.buscarId(parseInt(id));
            if (rol)
                return res.json(rol);
            res.status(404).json({ text: "rol con id no existe:" + id });
        });
    }
    listTecnicos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tecnicos = yield rolRepo_1.default.buscarTecnicos();
            return res.json(tecnicos);
        });
    }
}
const rolController = new RolController();
exports.default = rolController;
//# sourceMappingURL=rolController.js.map