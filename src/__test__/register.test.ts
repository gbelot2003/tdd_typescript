import { UsersInterface } from "../interfaces/User.interface";
import User from "../models/User.model";
import { RegisterService } from "../services/register.service";

const mock = jest.mock("../models/User.model.ts")


beforeEach(() => {
    jest.resetAllMocks()
})

describe("given a new instance of Users model", () => {
    it("set a the new user", async () => {

        //await User.create({ name: "Gerardo", email: "gbel@jasu.com", password:"passsw", state: true })
        const service = await new RegisterService().registerNewUser("Gerardo", "gbelot@jasd.com", "123456a")
        expect(service).toBe("USER_ALREDY_EXIST");

    })
})