import { createConnection } from "mysql2";

class OrdenRepo {
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

    async listarTecnicos() {
        const result = await new Promise((resolve, reject) => {
            this.db.query('SELECT * from t_usuario WHERE id_rol = 5', (err: any, rows: unknown) => {
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

const ordenRepo: OrdenRepo = new OrdenRepo();
export default ordenRepo;