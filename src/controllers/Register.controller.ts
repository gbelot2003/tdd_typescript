import { Request, Response } from "express";
import { passwordHandler } from "../utils/password.handler";
import { CheckUser } from "../services/checkUser.service";
import { UserRepository } from "../repositories/User.repository";

export class RegisterController {
    private _registerService: any

    constructor(service: any) {
        this._registerService = service

    }

    public async registerUser(req: Request, res: Response) {
        
        const body = (<any>req).body
        try {
            const repo = new UserRepository()
            const pass = await new passwordHandler().encrypt(body.password)
            const checker = await new CheckUser(repo).checkIfUserExist(body.email)
            const responce = await this._registerService.registerNewUser(body, checker, pass)
            return res.status(200).send({body: responce}).send({message: 'usuario registrado'})   
        } catch (e) {
            return res.status(404).send({message: 'Error inmporting'});
        }
        
        
        
    }
}