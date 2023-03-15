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

    it('user Register service is call when checker i false', async () => {

        const user = {
            name: 'Gerardo',
            email: 'ge@belot.com',
            password: 'password'
        }

        const checker = false

        new RegisterService(mockUserRepo)
            .registerNewUser(user, checker, user.password)

        expect(mockUserRepo.create).toHaveBeenCalled();
    })


    it('user Register service is never call when checker is true', async () => {

        const user = {
            name: 'Gerardo',
            email: 'ge@belot.com',
            password: 'password'
        }

        // If checker is true, the user already exist, so create 
        // is never called
        const checker = true

        new RegisterService(mockUserRepo)
            .registerNewUser(user, checker, user.password)

        expect(mockUserRepo.create).toBeCalledTimes(0);
    })
})




