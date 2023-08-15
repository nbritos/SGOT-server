import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ICaldera } from 'models/calderaModel';
import calderaRepo from '../repository/calderaRepo';


class CalderaController {

	public async list(req: Request, res: Response) {
		console.log(req.header("Authorization"));//Observamos el valor del token
		console.log(req.body);
		const calderas = await calderaRepo.listar();
		console.log(calderas);
		return res.json(calderas);
	}

	public async find(req: Request, res: Response) {
		console.log(req.params.id);
		const { id } = req.params;
		const caldera: ICaldera = await calderaRepo.buscarId(parseInt(id));
		if (caldera)
			return res.json(caldera);
		res.status(404).json({ text: "caldera con id no existe:" + id });
	}

	public async addCaldera(req: Request, res: Response) {
		const caldera: ICaldera = req.body;
		const busqueda = await calderaRepo.buscarNombre((String)(caldera.descripcion));
		if (!busqueda) {
			const result = await calderaRepo.crearCaldera(caldera);
			return res.json({ mensaje: 'caldera ingresada!' });
		}
		return res.json({ mensaje: 'ya existe la caldera' });
	}

	public async update(req: Request, res: Response) {//params lleva los datos que se pasan por URL o URI
		console.log(req.body);
		const { id } = req.params;
		const result = await calderaRepo.actualizar(req.body, parseInt(id));
		return res.json({ text: 'Actualizando caldera@ con id.. ' + id });
	}

	public async delete(req: Request, res: Response) {
		const { id } = req.params;
		const result = await calderaRepo.eliminar(parseInt(id));
		return res.json({ text: 'Borrando caldera con id ' + id });
	}
}

const calderaController = new CalderaController();
export default calderaController;
