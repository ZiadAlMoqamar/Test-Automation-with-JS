const { authenticateUser, createUser, deleteUser, deleteUserWithoutHeader, getUser, clearAllUsers } = require('../utils/apiUtility');

describe("Deleting user endpoint", () => {

    it('should respond with success status code incase of valid token', async () => {
        const email = "delete@gmail.com";
        const password = "ziad123";
        const requestBody = {
            "name": "zezo",
            "email": email,
            "password": password
        };
        const authRequestBody = {
            "email": email,
            "password": password
        };

        let token = null;
        await createUser(requestBody);
        const response = await authenticateUser(authRequestBody);
        expect(response.statusCode).toBe(200);
        expect(response.body.token).toBeDefined();
        token = response.body.token;

        const deleteResponse = await deleteUser(token);
        expect(deleteResponse.statusCode).toBe(200);

        const getResponse = await getUser(token);
        expect(getResponse.statusCode).toBe(403);
        expect(getResponse.body.message).toEqual("Unauthorized");
    });

    it('should respond with user deleted with success message incase of valid token', async () => {
        const email = "delete@gmail.com";
        const password = "ziad123";
        const requestBody = {
            "name": "zezo",
            "email": email,
            "password": password
        };
        const authRequestBody = {
            "email": email,
            "password": password
        };

        let token = null;
        await createUser(requestBody);
        const response = await authenticateUser(authRequestBody);
        expect(response.statusCode).toBe(200);
        expect(response.body.token).toBeDefined();
        token = response.body.token;

        const deleteResponse = await deleteUser(token);
        expect(deleteResponse.statusCode).toBe(200);
        expect(deleteResponse.body.message).toEqual("User deleted with success!");
    });

    it('should delete the user incase of valid token', async () => {
        const email = "delete@gmail.com";
        const password = "ziad123";
        const requestBody = {
            "name": "zezo",
            "email": email,
            "password": password
        };
        const authRequestBody = {
            "email": email,
            "password": password
        };

        let token = null;
        await createUser(requestBody);
        const response = await authenticateUser(authRequestBody);
        expect(response.statusCode).toBe(200);
        expect(response.body.token).toBeDefined();
        token = response.body.token;

        const deleteResponse = await deleteUser(token);
        expect(deleteResponse.statusCode).toBe(200);

        const getResponse = await getUser(token);
        expect(getResponse.statusCode).toBe(403);
        expect(getResponse.body.message).toEqual("Unauthorized");
    });

    it('should respond with 403 status code incase of incorrect token', async () => {
        const token = "random";
        const deleteResponse = await deleteUser(token);

        expect(deleteResponse.statusCode).toBe(403);
    });

    it('should respond with unauthorized to delete message incase of incorrect token', async () => {
        const token = "incor"
        const deleteResponse = await deleteUser(token);

        expect(deleteResponse.statusCode).toBe(403);
        expect(deleteResponse.body.message).toEqual("Unauthorized to delete");
    });

    it('should respond with 403 status code incase of empty token', async () => {
        const token = ""
        const deleteResponse = await deleteUser(token);

        expect(deleteResponse.statusCode).toBe(403);
        expect(deleteResponse.body.message).toEqual("Unauthorized to delete");
    });

    it('should respond with 403 status code incase of null token', async () => {
        const deleteResponse = await deleteUser(null);

        expect(deleteResponse.statusCode).toBe(403);
        expect(deleteResponse.body.message).toEqual("Unauthorized to delete");
    });

    it('should respond with 403 status code incase of no auth header', async () => {
        const deleteResponse = await deleteUserWithoutHeader();

        expect(deleteResponse.statusCode).toBe(403);
        expect(deleteResponse.body.message).toEqual("Unauthorized to delete");
    });

    afterAll(async () => {
        const response = await clearAllUsers();
        expect(response.statusCode).toBe(200);
    });
});