import userRepo from 'repository/userRepo';
import userController from '../controller/userController';
import { Router, Request, Response } from 'express';
import { TokenValidation } from '../lib/verifyToken';

class UserRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    
    config(): void {
        //ingreso
        this.router.post('/login',userController.login);
        //metodos crud
        this.router.get('/list',TokenValidation, userController.list);
        this.router.get('/:id',userController.find);
        this.router.post('/add',userController.addUser);
        this.router.put('/:id',userController.update);
        this.router.delete('/:id',userController.delete);
    }
}

//Exportamos el enrutador del objeto usuarios con 

const userRoutes = new UserRoutes();
export default userRoutes.router;