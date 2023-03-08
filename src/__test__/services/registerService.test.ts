import User from "../../models/User.model"
import { RegisterService } from "../../services/register.service"



describe('test dumi', () => {
    it('should be ok', async () => {
        const saved = new RegisterService()
        const testUser = await saved.registerNewUser("jonh", "email@com", 'password')
        expect(testUser).toHaveBeenCalled()
    })
})