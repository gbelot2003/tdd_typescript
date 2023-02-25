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

    describe('register service', () => {
        it('create ', async () => {
            const register = await new RegisterService().registerNewUser("Gerardo", "gbelort", "123456")
            expect(register).toMatchObject({"name": "Gerardo"})
        })
    })
})