import { RegisterService } from "../services/register.service";
import { CheckUser } from "../services/checkUser.service";
import { UserRepository } from "../repositories/User.repository";
import User from "../models/User.model";

const mockUserRepo = {
    findBy: jest.fn(),
    create: jest.fn()
}

afterEach(() => {
    jest.clearAllMocks();
});

describe('testing create service', () => {

    it('user Register service with findBy to be false', async () => {
        const repo = new UserRepository()
        const checker = await new CheckUser(repo).checkIfUserExist('gbeir@yas.cim')
        expect(checker).toBe(false)
    })


    it('user Register service with findBy to be true', async () => {
        const user = await User.create({ name: 'Gerardo', email: 'gbeir@yas.cim', password: '123456', state: true })
        user.save()
        const repo = new UserRepository()
        const checker = await new CheckUser(repo).checkIfUserExist('gbeir@yas.cim')
        expect(checker).toBe(true)
        User.drop()

    })

    it('user Register service with created', async () => {
        const repo = new UserRepository()
        const registerService = new RegisterService(repo)
            .registerNewUser('Gerardo', 'gbeir@yas.cim', '1234', false)

        //expect(mockUserRepo.create).toHaveBeenCalled();
        //expect(mockUserRepo.create).toHaveBeenCalledWith({ "email": "gbeir@yas.cim", "name": "Gerardo", "password": "1234", "state": true });
    })

})


