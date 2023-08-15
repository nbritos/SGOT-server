import { Request, Response } from 'express';
import { IUsuario } from '../models/userModel';
import jwt from 'jsonwebtoken';
import userRepo from '../repository/userRepo';


class UserController {

	public async login(req: Request, res: Response) {
		console.log("Datos: ", req.body);
		const { nombre, password } = req.body;
		const result = await userRepo.buscarNombre(nombre);
		console.log(nombre);
		console.log(password);
		console.log(result);
		if (result != null) {
			if (result.nombre == nombre && result.contrasenia == password) {
				const token: string = jwt.sign({ _id: result.id_usuario }, "secretKey"); //aca me crea el token
				res.json({ "login": "ok", "mensaje": "Bienvenido " + result.nombre, token: token });
				return;
			}
		}
		res.json({ "login": "incorrecto", "mensaje": "Usuario y/o contraseña incorrectos!!" });
	}

	// public async login(req:Request,res:Response){
	// 	const { nombre, password } = req.body; 
	// 		const result = await userRepo.buscarNombre(nombre);
	// 		console.log(nombre);
	// 		console.log(password);
	// 		console.log(result);
	// 		if (result != null){
	// 			if(result.nombre == nombre && result.password == password){
	// 				const token:string=jwt.sign({_id: result.id},"secretKey"); //aca me crea el token
	// 				res.json({ "login":"ok","mensaje":"Bienvenido "+result.nombre,token:token});
	// 				return;
	// 			}
	// 		}
	// 		res.json({"login":"incorrecto","mensaje":"Usuario no registrado"});
	//   }

	public async list(req: Request, res: Response) {
		console.log(req.header("Authorization"));//Observamos el valor del token
		console.log(req.body);
		const usuarios = await userRepo.listar();
		console.log(usuarios);
		return res.json(usuarios);
	}

	public async find(req: Request, res: Response) {
		console.log(req.params.id);
		const { id } = req.params;
		const usuario: IUsuario = await userRepo.buscarId(parseInt(id));
		if (usuario)
			return res.json(usuario);
		res.status(404).json({ text: "el usuario con id no existe:" + id });
	}

	public async addUser(req: Request, res: Response) {
		const usuario: IUsuario = req.body;
		// const busqueda = await userRepo.buscarNombre((String)(usuario.nombre));
		// if (!busqueda) {
		// 	const result = await userRepo.crearUsuario(usuario);
		// 	return res.json({ mensaje: 'usuario creado!' });
		// }
		// return res.json({ mensaje: 'ya existe el usuario' });

		const result = await userRepo.crearUsuario(usuario);
		return res.json({ mensaje: 'usuario creado!' });
	}

	public async update(req: Request, res: Response) {//params lleva los datos que se pasan por URL o URI
		console.log(req.body);
		const { id } = req.params;
		const result = await userRepo.actualizar(req.body, id);
		return res.json({ text: 'Actualizando usuari@ con id.. ' + id });
	}

	public async delete(req: Request, res: Response) {
		const { id } = req.params;
		const result = await userRepo.eliminar(parseInt(id));
		return res.json({ text: 'Borrando un usuari@. Otra mas y van... Id de usuari@: ' + id });
	}
}

const userController = new UserController();
export default userController;
