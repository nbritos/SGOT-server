import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import ordenRepo from '../repository/ordenRepo';

class OrdenController {
	public async listTecnicos(req:Request, res:Response){
		const tecnicos = await ordenRepo.listarTecnicos();
		return res.json(tecnicos);
	}
}

const ordenController = new OrdenController();
export default ordenController;