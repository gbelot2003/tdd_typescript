import { UserRepository } from "../repositories/User.repository";
import { passwordHandler } from "../utils/password.handler";
export class RegisterService {

    private _repo: UserRepository

    constructor(repo: UserRepository) {
        this._repo = repo
    }

    public async registerNewUser(_user: any, cheked: boolean, hash: string) {
        if (cheked) return 'ALREDY_EXIST'
        const user = { name: _user.name, email: _user.email, password: hash, state: true }
        const model = await this._repo.create(user)
        return model;
    }
}