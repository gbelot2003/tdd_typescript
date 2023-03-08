import { UserRepository } from "../repositories/User.repository";

export class RegisterService {

    private _repo: UserRepository

    constructor(repo: UserRepository) {
        this._repo = repo
    }

    private async checkUserExistence(email: string) {
        const user = await this._repo.findBy(email);
        if (user) return true
        return false
    }

    public async registerNewUser(name: string, email: string, password: string, cheked: boolean) {
        if(!cheked) return 'ALREDY_EXIST'
        const user = { name: name, email: email, password: password, state: true }
        const model = await this._repo.create(user)
        return model;
    }
}