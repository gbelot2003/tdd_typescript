import { passwordHandler } from "../utils/password.handler";


describe('first', () => { 
    it('test hash passwords', async () => {
        const pass = await new passwordHandler().encrypt('password')
        const verify = await new passwordHandler().compare('password', pass)

        expect(verify).toBe(true)
    })
})