import { ICaldera } from "models/calderaModel";
import { createConnection } from "mysql2";

class CalderaRepo {
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
			this.db.query('select id_caldera, descripcion, logo from t_caldera', (err: any, rows: unknown) => {
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
		const encontrado: any = await this.db.promise().query('SELECT id_caldera, descripcion FROM t_caldera WHERE id_caldera = ?', [id]);
		//Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
		if (encontrado.length > 1)
			return encontrado[0][0];
		console.log(encontrado);
		return null;
	}

	async buscarNombre(descripcion: string) {
		const encontrado: any = await this.db.promise().query('SELECT * FROM t_caldera WHERE descripcion = ?', [descripcion]);
		if (encontrado.length > 1)
			return encontrado[0][0];
		return null;
	}

	async crearCaldera(caldera: ICaldera) {
		const result = (await this.db.promise().query('INSERT INTO t_caldera (descripcion,logo) VALUES (?,?)',
			[
				caldera.descripcion,
				caldera.logo]))[0].affectedRows;
		return result;
	}

	async actualizar(caldera: ICaldera, id: number) {
		const result = (await this.db.query('UPDATE t_caldera SET ? WHERE ID = ?', [caldera, id]))[0].affectedRows;
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

const caleraRepo = new CalderaRepo();
export default caleraRepo;