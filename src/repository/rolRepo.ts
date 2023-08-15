import { createConnection } from "mysql2";

class RolRepo {
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
			this.db.query('SELECT id_rol, descripcion FROM t_rol', (err: any, rows: unknown) => {
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
		const encontrado: any = await this.db.promise().query('SELECT id_rol, descripcion FROM t_rol WHERE id_rol = ?', [id]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		if (encontrado.length > 1)
			return encontrado[0][0];
		console.log(encontrado);
		return null;
	}

	async buscarTecnicos(){
		const result = await new Promise((resolve, reject) => {
			this.db.query('SELECT * FROM t_usuario WHERE id_rol = 5', (err: any, rows: unknown) => {
				if (!err) {
					resolve(rows)
				} else {
					reject(err)
				}
			})
		})
		return result;		
	}
}

const rolRepo = new RolRepo();
export default rolRepo;