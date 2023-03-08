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

    it('user Register service with created', async () => {

        const checker = await new CheckUser(mockUserRepo).checkIfUserExist('gbeir@yas.cim')

        const registerService = new RegisterService(mockUserRepo)
            .registerNewUser('Gerardo', 'gbeir@yas.cim', '1234', checker)

        expect(mockUserRepo.create).toHaveBeenCalled();
        expect(mockUserRepo.create).toHaveBeenCalledWith({ "email": "gbeir@yas.cim", "name": "Gerardo", "password": "1234", "state": true });
    })

})


