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
class CalderaRepo {
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
    listar() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield new Promise((resolve, reject) => {
                this.db.query('select id_caldera, descripcion, logo from t_caldera', (err, rows) => {
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
    buscarId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const encontrado = yield this.db.promise().query('SELECT id_caldera, descripcion FROM t_caldera WHERE id_caldera = ?', [id]);
            //Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
            if (encontrado.length > 1)
                return encontrado[0][0];
            console.log(encontrado);
            return null;
        });
    }
    buscarNombre(descripcion) {
        return __awaiter(this, void 0, void 0, function* () {
            const encontrado = yield this.db.promise().query('SELECT * FROM t_caldera WHERE descripcion = ?', [descripcion]);
            if (encontrado.length > 1)
                return encontrado[0][0];
            return null;
        });
    }
    crearCaldera(caldera) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (yield this.db.promise().query('INSERT INTO t_caldera (descripcion,logo) VALUES (?,?)', [
                caldera.descripcion,
                caldera.logo
            ]))[0].affectedRows;
            return result;
        });
    }
    actualizar(caldera, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (yield this.db.query('UPDATE t_caldera SET ? WHERE ID = ?', [caldera, id]))[0].affectedRows;
            console.log(result);
            return result;
        });
    }
    eliminar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = (yield this.db.promise().query('DELETE FROM USUARIOS WHERE ID = ?', [id]))[0].affectedRows;
            console.log(usuario);
            return usuario;
        });
    }
}
//Exportamos el objeto userModel con 
const caleraRepo = new CalderaRepo();
exports.default = caleraRepo;
//# sourceMappingURL=calderaRepo%20copy.js.map