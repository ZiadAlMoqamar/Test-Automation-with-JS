const { authenticateUser, createUser, clearAllUsers, getUser } = require('../utils/apiUtility');

describe("Authenticating user endpoint", () => {
    it('should respond with a success status code incase of valid email and password', async () => {
        const email = "ziad132423@gmail.com";
        const password = "ziad123";
        const requestBody = {
            "name": "ziad1",
            "email": email,
            "password": password
        };
        const authRequestBody = {
            "email": email,
            "password": password
        };

        await createUser(requestBody);
        const response = await authenticateUser(authRequestBody);
        expect(response.statusCode).toBe(200);
    });

    it('should respond with a token incase of valid email and password', async () => {
        const email = "ziad2@gmail.com";
        const password = "ziad123";
        const requestBody = {
            "name": "ziad2",
            "email": email,
            "password": password
        };
        const authRequestBody = {
            "email": email,
            "password": password
        };

        await createUser(requestBody);
        const response = await authenticateUser(authRequestBody);
        expect(response.statusCode).toBe(200);
        expect(response.body.token).toBeDefined();
    });

    it('should respond with a valid token incase of valid email and password', async () => {
        const email = "valid@gmail.com";
        const password = "ziad123";
        const requestBody = {
            "name": "valid",
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

    it('should respond with status code 401 unauthorized incase of correct email and  wrong password', async () => {
        const email = "correctEmail@gmail.com";
        const requestBody = {
            "name": "wrong pass",
            "email": email,
            "password": "ziad123"
        };
        const authRequestBody = {
            "email": email,
            "password": "wrong"
        };

        await createUser(requestBody);
        const response = await authenticateUser(authRequestBody);
        expect(response.statusCode).toBe(401);
    });

    it('should respond with status code 401 unauthorized incase of empty request body object', async () => {
        const response = await authenticateUser({});
        expect(response.statusCode).toBe(401);
    });

    it('should respond with status code 401 unauthorized incase of wrong email and  correct password', async () => {
        const password = "ziad123";
        const requestBody = {
            "name": "wrong email",
            "email": "correctEmail@gmail.com",
            "password": password
        };
        const authRequestBody = {
            "email": "wrongEmail@gmail.com",
            "password": password
        };

        await createUser(requestBody);
        const response = await authenticateUser(authRequestBody);
        expect(response.statusCode).toBe(401);
    });

    it('should respond with Incorrect email or password message incase of correct email and  wrong password', async () => {
        const email = "correctEmail2@gmail.com";
        const requestBody = {
            "name": "wrong p",
            "email": email,
            "password": "ziad123"
        };
        const authRequestBody = {
            "email": email,
            "password": "no"
        };

        await createUser(requestBody);
        const response = await authenticateUser(authRequestBody);
        expect(response.statusCode).toBe(401);
        expect(response.body.message).toBe("Incorrect email or password");
    });

    it('should respond with status code 401 unauthorized incase of empty email', async () => {
        const password = "ziad123";
        const requestBody = {
            "name": "empty email",
            "email": "emptyemaill@gmail.com",
            "password": password
        };
        const authRequestBody = {
            "email": "",
            "password": password
        };

        await createUser(requestBody);
        const response = await authenticateUser(authRequestBody);
        expect(response.statusCode).toBe(401);
        expect(response.body.message).toBe("Incorrect email or password");
    });

    it('should respond with status code 401 unauthorized incase of empty password', async () => {
        const email = "emptypasssss@gmail.com";
        const requestBody = {
            "name": "empty pass",
            "email": email,
            "password": "ziad123"
        };
        const authRequestBody = {
            "email": email,
            "password": ""
        };

        await createUser(requestBody);
        const response = await authenticateUser(authRequestBody);
        expect(response.statusCode).toBe(401);
        expect(response.body.message).toBe("Incorrect email or password");
    });

    it('should respond with status code 401 unauthorized incase of null email', async () => {
        const password = "ziad123";
        const requestBody = {
            "name": "null email",
            "email": "nullemail@gmail.com",
            "password": password
        };
        const authRequestBody = {
            "email": null,
            "password": password
        };

        await createUser(requestBody);
        const response = await authenticateUser(authRequestBody);
        expect(response.statusCode).toBe(401);
        expect(response.body.message).toBe("Incorrect email or password");
    });

    it('should respond with status code 401 unauthorized incase of null password', async () => {
        const email = "nullpasssssss@gmail.com";
        const requestBody = {
            "name": "null pass",
            "email": email,
            "password": "ziad123"
        };
        const authRequestBody = {
            "email": email,
            "password": null
        };

        await createUser(requestBody);
        const response = await authenticateUser(authRequestBody);
        expect(response.statusCode).toBe(401);
        expect(response.body.message).toBe("Incorrect email or password");
    });

    afterAll(async () => {
        const response = await clearAllUsers();
        expect(response.statusCode).toBe(200);
    });
});