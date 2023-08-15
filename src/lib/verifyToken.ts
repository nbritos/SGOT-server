import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const TokenValidation = (req: Request, res: Response, next: NextFunction) => {
    let token: any = (req.header("Authorization")?.split('Bearer ', 2));
    if (!token) {
        console.log(token);
        return res.status(401).json("Acceso denegado :P");
    }
    token = token['1'];
    console.log("Evaluando token recibido");
    console.log(token);
    next();
}



