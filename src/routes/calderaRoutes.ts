import { Router, Request, Response } from 'express';
import calderaController from '../controller/calderaController';

class CalderaRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    
    config(): void {
        this.router.get('/list', calderaController.list);
        this.router.post('/',calderaController.addCaldera);
        this.router.get('/:id',calderaController.find)
        // this.router.put('/:id',userController.update);
        // this.router.delete('/:id',userController.delete);
    }
}

//Exportamos el enrutador del objeto usuarios con 

const calderaRoutes = new CalderaRoutes();
export default calderaRoutes.router;