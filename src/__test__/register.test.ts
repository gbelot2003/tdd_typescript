import User from "../models/User.model"
import { RegisterService } from "../services/register.service"

//jest.mock("../models/User.model");


describe('User', function() {
    beforeAll(function(done){
        User.sync({force: true}).then(() => {
            done(null)
        }).catch((err) => {
            done(err)
        })
    })

    describe('register a user', () => {
        it('create ', async () => {
            const register = await new RegisterService().registerNewUser("Gerardo", "gbelort", "123456")
            expect(register).toMatchObject({"name": "Gerardo"})
        })

        it('contains alredy a user', async () => {
            await User.create({ name: "Gerardo", email: "gbelort", password: "password", state: true })

            const register = await new RegisterService().registerNewUser("Gerardo", "gbelort", "123456")
            expect(register).toBe('USER_ALREDY_EXIST')
        })
    })
})