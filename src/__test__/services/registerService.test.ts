import { RegisterService } from "../../services/register.service";
import { CheckUser } from "../../services/checkUser.service";
import { passwordHandler } from "../../utils/password.handler";

const mockUserRepo = {
    findBy: jest.fn(),
    create: jest.fn()
}

afterEach(() => {
    jest.clearAllMocks();
});

describe('testing create service', () => {

    it('user Register service with created', async () => {

        const user = {
            name: 'Gerardo',
            email: 'ge@belot.com',
            password: 'password'
        }

        const pass = await new passwordHandler().encrypt(user.password)

        const checker = await new CheckUser(mockUserRepo).checkIfUserExist(user.email)

        new RegisterService(mockUserRepo)
            .registerNewUser(user, checker, pass)

        expect(mockUserRepo.create).toHaveBeenCalled();
        //expect(mockUserRepo.create).toHaveBeenCalledWith({ "email": "gbeir@yas.cim", "name": "Gerardo", "password": "1234", "state": true });
    })

})


