import { User } from "../models/User.model";


export class RegisterService {
    public async registerNewUser(_name: string, _email: string, _password: string) {
        const check = await User.findOne({ where: { email: _email } })
        if (check) {
            return "USER_ALREDY_EXIST"
        } else {
            return "NOT"
        }
        
        //const registerUser = await User.create({ name: _name, email: _email, password: _password, state: true })
        //return _name
    }
}