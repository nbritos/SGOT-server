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
const calderaRepo_1 = __importDefault(require("../repository/calderaRepo"));
class CalderaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.header("Authorization")); //Observamos el valor del token
            console.log(req.body);
            const calderas = yield calderaRepo_1.default.listar();
            console.log(calderas);
            return res.json(calderas);
        });
    }
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const caldera = yield calderaRepo_1.default.buscarId(parseInt(id));
            if (caldera)
                return res.json(caldera);
            res.status(404).json({ text: "caldera con id no existe:" + id });
        });
    }
    addCaldera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const caldera = req.body;
            const busqueda = yield calderaRepo_1.default.buscarNombre((String)(caldera.descripcion));
            if (!busqueda) {
                const result = yield calderaRepo_1.default.crearCaldera(caldera);
                return res.json({ mensaje: 'caldera ingresada!' });
            }
            return res.json({ mensaje: 'ya existe la caldera' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { id } = req.params;
            const result = yield calderaRepo_1.default.actualizar(req.body, parseInt(id));
            return res.json({ text: 'Actualizando caldera@ con id.. ' + id });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield calderaRepo_1.default.eliminar(parseInt(id));
            return res.json({ text: 'Borrando caldera con id ' + id });
        });
    }
}
const calderaController = new CalderaController();
exports.default = calderaController;
//# sourceMappingURL=calderaController%20copy.js.map