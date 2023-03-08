import { UserRepository } from "../repositories/User.repository"

export class CheckUser {

    private _repo: UserRepository

    constructor(repo: UserRepository) {
        this._repo = repo
    }

    public async checkIfUserExist(email: string) {
        const user = await this._repo.findBy(email)
        console.log(user)
        if(!user) return false
        return true
    }
}