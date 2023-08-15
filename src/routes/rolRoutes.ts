import { Router, Request, Response } from 'express';
import calderaController from '../controller/calderaController';
import rolController from '../controller/rolController';

class RolROutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    
    config(): void {
        this.router.get('/list', rolController.list);
        this.router.get('/tecnicos',rolController.listTecnicos);
    }
}

//Exportamos el enrutador del objeto usuarios con 

const rolRoutes = new RolROutes();
export default rolRoutes.router;