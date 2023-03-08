import User from "../models/User.model";


export class UserRepository {

    public async findBy(search_: string) {
        return await User.findOne({ where: { email: search_ } })
    }

    public async create(user: any) {
        const user_ = await User.create({ name: user.name, email: user.email, password: user.password, state: true })
        user_.save()
        return user_
    }
}
