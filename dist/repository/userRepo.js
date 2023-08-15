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
class UserRepo {
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
                this.db.query('select * from t_usuario', (err, rows) => {
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
            const encontrado = yield this.db.promise().query('SELECT id, nombre, rol FROM usuarios WHERE id = ?', [id]);
            if (encontrado.length > 1)
                return encontrado[0][0];
            console.log(encontrado);
            return null;
        });
    }
    //recodear para que busque el DNI
    buscarNombre(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            const encontrado = yield this.db.promise().query('SELECT * FROM t_usuario WHERE nombre = ?', [nombre]);
            if (encontrado.length > 1)
                return encontrado[0][0];
            return null;
        });
    }
    crearUsuario(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (yield this.db.promise().query('INSERT INTO t_usuario (nombre,apellido,id_rol,mail,dni,contrasenia) VALUES (?,?,?,?,?,?)', [
                usuario.nombre,
                usuario.apellido,
                usuario.rol,
                usuario.email,
                usuario.dni,
                usuario.password,
            ]))[0].affectedRows;
            return result;
        });
    }
    actualizar(usuario, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (yield this.db.promise().query('UPDATE usuarios SET ? WHERE ID = ?', [usuario, id]))[0].affectedRows;
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
const userRepo = new UserRepo();
exports.default = userRepo;
//# sourceMappingURL=userRepo.js.map