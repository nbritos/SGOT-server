import { IUsuario } from "models/userModel";
import { createConnection } from "mysql2";

class UserRepo {
	private db: any; //Manejador de la bd
	constructor() {
		this.config(); //aplicamos la conexion con la BD.
	}

	async config() {//Parametro de conexion con la BD.
		this.db = await createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'bd_calderas'
		});
	}

	async listar() {
		const result = await new Promise((resolve, reject) => {
			this.db.query('select * from t_usuario', (err: any, rows: unknown) => {
				if (!err) {
					resolve(rows)
				} else {
					reject(err)
				}
			})
		})

		return result;
	}

	async buscarId(id: number) {
		const encontrado: any = await this.db.promise().query('SELECT id, nombre, rol FROM usuarios WHERE id = ?', [id]);
		if (encontrado.length > 1)
			return encontrado[0][0];
		console.log(encontrado);
		return null;
	}
	
	//recodear para que busque el DNI
	async buscarNombre(nombre: string) {
		const encontrado: any = await this.db.promise().query('SELECT * FROM t_usuario WHERE nombre = ?', [nombre]);
		if (encontrado.length > 1)
			return encontrado[0][0];
		return null;
	}

	

	async crearUsuario(usuario: IUsuario) {
		const result = (await this.db.promise().query('INSERT INTO t_usuario (nombre,apellido,id_rol,mail,dni,contrasenia) VALUES (?,?,?,?,?,?)',
			[
				usuario.nombre,
				usuario.apellido,
				usuario.rol,
				usuario.email,
				usuario.dni,
				usuario.password,
				]))[0].affectedRows;
		return result;
	}

	async actualizar(usuario: IUsuario, id: string) {
		const result = (await this.db.promise().query('UPDATE usuarios SET ? WHERE ID = ?', [usuario, id]))[0].affectedRows;
		console.log(result);
		return result;
	}

	async eliminar(id: number) {
		const usuario = (await this.db.promise().query('DELETE FROM USUARIOS WHERE ID = ?', [id]))[0].affectedRows;
		console.log(usuario);
		return usuario;
	}
}

//Exportamos el objeto userModel con 

const userRepo: UserRepo = new UserRepo();
export default userRepo;