const requestsBody = require('../resources/requestsBody');
const { authenticateUser, createUser, deleteAllUsers } = require('../utils/apiUtility');

describe("Creating user endpoint", () => {
    it('should respond with a success status code incase of valid input', async () => {
        const requestBody = {
            "name": "ziad1",
            "email": "ziad1@gmail.com",
            "password": "ziad123"
        };

        const response = await createUser(requestBody);
        expect(response.statusCode).toBe(200);
    });

    it('should respond with a success message incase of valid input', async () => {
        const requestBody = {
            "name": "ziad2",
            "email": "ziad2@gmail.com",
            "password": "ziad123"
        };

        const response = await createUser(requestsBody);
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toEqual("User registered with success");
    });

    it('should respond with a token incase of valid input', async () => {
        const requestBody = {
            "name": "token",
            "email": "token@gmail.com",
            "password": "ziad123"
        };

        const response = await createUser(requestBody);
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toEqual("User registered with success");
        expect(response.body.token).toBeDefined();
    });

    it('should respond with a success message incase of duplicate name', async () => {
        const requestBody = {
            "name": "ziad3",
            "email": "ziad23@gmail.com",
            "password": "ziad123"
        };
        const requestBodyWithDuplicateName = {
            "name": "ziad3",
            "email": "ziad3@gmail.com",
            "password": "ziad123"
        };

        await createUser(requestBody);
        const response = await createUser(requestBodyWithDuplicateName);
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toEqual("User registered with success");
    });

    it('should respond with status code 409 conflict in case of duplicate email', async () => {
        const requestBody = {
            "name": "ziad4",
            "email": "conflict@gmail.com",
            "password": "ziad123"
        };
        const requestBodyWithDuplicateEmail = {
            "name": "ziad5",
            "email": "conflict@gmail.com",
            "password": "ziad123"
        };

        await createUser(requestBody);
        const response = await createUser(requestBodyWithDuplicateEmail);
        expect(response.statusCode).toBe(409);
    });

    it('should respond with already registered message in case of duplicate email', async () => {
        const requestBody = {
            "name": "register",
            "email": "registered@gmail.com",
            "password": "ziad123"
        };

        await createUser(requestBody);
        const response = await createUser(requestBody);
        expect(response.body.message).toEqual("User already registered");
    });

    it('should respond with status code 400 bad request in case of invalid email parameter', async () => {
        const requestBody = {
            "name": "ziaad",
            "email": "invalidName@",
            "password": "ziad123"
        };

        const response = await createUser(requestBody);
        expect(response.statusCode).toEqual(400);
    });

    it('should respond with status code 400 bad request in case of empty request body', async () => {
        const response = await createUser({});
        expect(response.statusCode).toEqual(400);
    });

    it('should respond with status code 400 bad request in case of missing name parameter', async () => {
        const requestBody = {
            "email": "noName@gmail.com",
            "password": "ziad123"
        };

        const response = await createUser(requestBody);
        expect(response.statusCode).toEqual(400);
    });

    it('should respond with status code 400 bad request in case of missing email parameter', async () => {
        const requestBody = {
            "name": "no email",
            "password": "ziad123"
        };

        const response = await createUser(requestBody);
        expect(response.statusCode).toEqual(400);
    });

    it('should respond with status code 400 bad request in case of missing password parameter', async () => {
        const requestBody = {
            "name": "no pass",
            "email": "nopass@gmail.com"
        };

        const response = await createUser(requestBody);
        expect(response.statusCode).toEqual(400);
    });

    it('should respond with status code 400 bad request in case of empty name parameter', async () => {
        const requestBody = {
            "name": "",
            "email": "emptyName@gmail.com",
            "password": "ziad123"
        };

        const response = await createUser(requestBody);
        expect(response.statusCode).toEqual(400);
    });

    it('should respond with status code 400 bad request in case of empty email parameter', async () => {
        const requestBody = {
            "name": "empty email",
            "email": "",
            "password": "ziad123"
        };

        const response = await createUser(requestBody);
        expect(response.statusCode).toEqual(400);
    });

    it('should respond with status code 400 bad request in case of empty password parameter', async () => {
        const requestBody = {
            "name": "empty pass",
            "email": "emptyPass@gmail.com",
            "password": ""
        };

        const response = await createUser(requestBody);
        expect(response.statusCode).toEqual(400);
    });

    it('should respond with status code 400 bad request in case of null name parameter', async () => {
        const requestBody = {
            "name": null,
            "email": "nullName@gmail.com",
            "password": "ziad22"
        };

        const response = await createUser(requestBody);
        expect(response.statusCode).toEqual(400);
    });

    it('should respond with status code 400 bad request in case of null email parameter', async () => {
        const requestBody = {
            "name": "null email",
            "email": null,
            "password": "ziad22"
        };
        const response = await createUser(requestBody);
        expect(response.statusCode).toEqual(400);
    });

    it('should respond with status code 400 bad request in case of null password parameter', async () => {
        const requestBody = {
            "name": "null pass",
            "email": "nullpass@gmail.com",
            "password": null
        };

        const response = await createUser(requestBody);
        expect(response.statusCode).toEqual(400);
    });

    afterAll(async () => {
        const response = await deleteAllUsers();
        expect(response.statusCode).toBe(200);
    });
});