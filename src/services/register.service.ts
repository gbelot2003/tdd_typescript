

import { UsersInterface } from "../interfaces/User.interface";
import User from "../models/User.model";

export class RegisterService {

    private connect:Connection;

    constructor() {
        this.name = "hello";
      }

    private async checkIfUserExist(email: string) {
        return await User.findOne({ where: { email: email } });
    }
    
    public async registerNewUser(name: string, email: string, password: string) {
        //if (await this.checkIfUserExist(email)) return "USER_ALREDY_EXIST"
        return await User.create({ name: name, email: email, password: password, state: true })
    }
}