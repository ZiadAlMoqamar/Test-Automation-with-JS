const { authenticateUser, createUser, getUser, getUserWithoutHeader, clearAllUsers } = require('../utils/apiUtility');

describe("Getting user endpoint", () => {

    it('should respond with success status code incase of valid token', async () => {
        const email = "get@gmail.com";
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

        const getResponse = await getUser(token);
        expect(getResponse.statusCode).toBe(200);
    });

    it('should respond with correct user data incase of valid token', async () => {
        const name = "zezo z";
        const email = "get2@gmail.com";
        const password = "ziad123";
        const requestBody = {
            "name": name,
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

        const getResponse = await getUser(token);
        expect(getResponse.statusCode).toBe(200);
        expect(getResponse.body.id).toEqual(expect.any(Number));
        expect(getResponse.body.name).toEqual(name);
        expect(getResponse.body.email).toEqual(email);
        expect(getResponse.body.password).toEqual(password);
        expect(getResponse.body.imageUrl).toEqual(expect.stringMatching(/https:\/\/almsaeedstudio.com\/themes/));
    });

    it('should respond with correct user data types incase of valid token', async () => {
        const name = "zezo z";
        const email = "get3@gmail.com";
        const password = "ziad123";
        const requestBody = {
            "name": name,
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

        const getResponse = await getUser(token);
        expect(getResponse.statusCode).toBe(200);
        expect(typeof getResponse.body.id).toBe('number');
        expect(typeof getResponse.body.name).toBe('string');
        expect(typeof getResponse.body.email).toBe('string');
        expect(typeof getResponse.body.password).toBe('string');
        expect(typeof getResponse.body.imageUrl).toBe('string');
    });

    it('should respond with 403 status code incase of incorrect token', async () => {
        const token = "132incorrect";
        const getResponse = await getUser(token);

        expect(getResponse.statusCode).toBe(403);
    });

    it('should respond with unauthorized message incase of incorrect token', async () => {
        const token = "132incorrect";
        const getResponse = await getUser(token);

        expect(getResponse.statusCode).toBe(403);
        expect(getResponse.body.message).toEqual("Unauthorized");
    });

    it('should respond with 403 status code incase of empty token', async () => {
        const token = "";
        const getResponse = await getUser(token);

        expect(getResponse.statusCode).toBe(403);
        expect(getResponse.body.message).toEqual("Unauthorized");
    });

    it('should respond with 403 status code incase of null token', async () => {
        const getResponse = await getUser(null);
        expect(getResponse.statusCode).toBe(403);
        expect(getResponse.body.message).toEqual("Unauthorized");
    });

    it('should respond with 403 status code incase of no auth header', async () => {
        const getResponse = await getUserWithoutHeader();
        expect(getResponse.statusCode).toBe(403);
        expect(getResponse.body.message).toEqual("Unauthorized");
    });

    afterAll(async () => {
        const response = await clearAllUsers();
        expect(response.statusCode).toBe(200);
    });
});
