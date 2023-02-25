import { UsersInterface } from "../interfaces/User.interface";
import User from "../models/User.model";

export class RegisterService {
    public async registerNewUser(name: string, email: string, password: string) {
        const check = await User.findOne({ where: { email: email } })
        if (check) return "USER_ALREDY_EXIST"
        const user = User.create({ name: name, email: email, password: password, state: true })
        return user
    }
}
