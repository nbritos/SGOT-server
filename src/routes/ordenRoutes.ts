import { Router } from 'express';
import ordenController from '../controller/ordenController';


class OrdenRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    
    config(): void {
        this.router.get('/tecnicos',ordenController.listTecnicos);
    }
}

//Exportamos el enrutador del objeto usuarios con 

const ordenRoute = new OrdenRoutes();
export default ordenRoute.router;