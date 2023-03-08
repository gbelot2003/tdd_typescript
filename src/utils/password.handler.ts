import { hash, compare } from "bcryptjs";

export class passwordHandler {

    private _passwordHash
    private _compare

    constructor() {
        this._passwordHash = hash
        this._compare = compare
    }

    public async encrypt(pass: string) {
        const passHash = await this._passwordHash(pass, 8)
        return passHash
    }

    public async compare(pass: string, passHash: string) {
        const isCorrect = await this._compare(pass, passHash)
        return isCorrect
    }

}