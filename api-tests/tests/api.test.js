const { authenticateUser, createUser, deleteAllUsers } = require('../utils/apiUtility');

describe("Creating user endpoint", () => {

    it('should respond with a success message', async () => {
        const response = await createUser(
            {
                "name": "ziad",
                "email": "ziad@gmail.com",
                "password": "user123"
            }
        );
        expect(response.statusCode).toBe(200)
        expect(response.body.message).toEqual("User registered with success")
    });

    afterAll(async () => {
        const response = await deleteAllUsers();
        expect(response.statusCode).toBe(200);
    });
});