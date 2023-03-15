import { RegisterController } from "../../controllers/Register.controller";
const { mockRequest, mockResponse } = require('./utils')


jest.mock('sequelize')


jest.mock('../../services/register.service', () => {
    return {
        registerNewUser: jest.fn()
    }
});

const mockUserService = {
    registerNewUser: jest.fn()
}

const mockUserRepo = {
    findBy: jest.fn(),
    create: jest.fn()
}

describe("Check method \'RegisterController\' ", () => {
    test('should 200 and return correct value', async () => {
        let req = mockRequest();
        req.body = {
            name: 'Gerard',
            email: 'gerar@yasoo.com',
            password: '1234567'
        }

        const res = await mockResponse();
        res.body = {
            message: 'Placeholder message'
        }

        const controller = await new RegisterController(mockUserService)
        await controller.registerUser(req, res)

        expect(res.send).toHaveBeenCalledTimes(2)
        expect(res.send.mock.calls.length).toBe(2);
        expect(res.send).toHaveBeenCalledWith({ "message": 'usuario registrado' });
    })

    test('should 404 and return correct value', async () => {
        let req = mockRequest();
        req.body = {}

        const res = await mockResponse();

        const controller = await new RegisterController(mockUserService)
        await controller.registerUser(req, res)

        expect(res.send).toHaveBeenCalledTimes(1)
        expect(res.send).toHaveBeenCalledWith({message: 'Error Validation Data'});

    })
})