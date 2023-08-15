import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { IRol } from 'models/rolModel';
import rolRepo from '../repository/rolRepo';

class RolController {

	public async list(req: Request, res: Response) {
		console.log(req.header("Authorization"));//Observamos el valor del token
		console.log(req.body);
		const roles = await rolRepo.listar();
		return res.json(roles);
	}

	public async find(req: Request, res: Response) {
		console.log(req.params.id);
		const { id } = req.params;
		const rol: IRol = await rolRepo.buscarId(parseInt(id));
		if (rol)
			return res.json(rol);
		res.status(404).json({ text: "rol con id no existe:" + id });
	}

	public async listTecnicos(req:Request, res:Response){
		const tecnicos = await rolRepo.buscarTecnicos();
		return res.json(tecnicos);
	}
	
}

const rolController = new RolController();
export default rolController;
