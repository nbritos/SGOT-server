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
const mysql2_1 = require("mysql2");
class OrdenRepo {
    constructor() {
        this.config(); //aplicamos la conexion con la BD.
    }
    config() {
        return __awaiter(this, void 0, void 0, function* () {
            this.db = yield (0, mysql2_1.createConnection)({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'bd_calderas'
            });
        });
    }
    listarTecnicos() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield new Promise((resolve, reject) => {
                this.db.query('SELECT * from t_usuario WHERE id_rol = 5', (err, rows) => {
                    if (!err) {
                        resolve(rows);
                    }
                    else {
                        reject(err);
                    }
                });
            });
            return result;
        });
    }
}
const ordenRepo = new OrdenRepo();
exports.default = ordenRepo;
//# sourceMappingURL=ordenRepo.js.map