const { authenticateUser, createUser, deleteUser, clearAllUsers } = require('../utils/apiUtility');

describe("Authenticating user endpoint", () => {
    it('should respond with a success status code incase of valid email and password', async () => {
        const requestBody = {
            "name": "ziad1",
            "email": "ziad1@gmail.com",
            "password": "ziad123"
        };
        const authRequestBody = {
            "email": "ziad1@gmail.com",
            "password": "ziad123"
        };

        await createUser(requestBody);
        const response = await authenticateUser(authRequestBody);
        expect(response.statusCode).toBe(200);
    });

    it('should respond with a token incase of valid email and password', async () => {
        const requestBody = {
            "name": "ziad2",
            "email": "ziad2@gmail.com",
            "password": "ziad123"
        };
        const authRequestBody = {
            "email": "ziad2@gmail.com",
            "password": "ziad123"
        };

        await createUser(requestBody);
        const response = await authenticateUser(authRequestBody);
        expect(response.statusCode).toBe(200);
        expect(response.body.token).toBeDefined();
    });

    it('should respond with a valid token incase of valid email and password', async () => {
        const requestBody = {
            "name": "valid",
            "email": "valid@gmail.com",
            "password": "ziad123"
        };
        const authRequestBody = {
            "email": "valid@gmail.com",
            "password": "ziad123"
        };

        let token = null;
        await createUser(requestBody);
        const response = await authenticateUser(authRequestBody);
        expect(response.statusCode).toBe(200);
        expect(response.body.token).toBeDefined();
        token = response.body.token;

        const deleteResponse = await deleteUser(token);
        expect(deleteResponse.statusCode).toBe(200);
    });

    it('should respond with status code 401 unauthorized incase of correct email and  wrong password', async () => {
        const requestBody = {
            "name": "wrong pass",
            "email": "correctEmail@gmail.com",
            "password": "ziad123"
        };
        const authRequestBody = {
            "email": "correctEmail@gmail.com",
            "password": "wrong"
        };

        await createUser(requestBody);
        const response = await authenticateUser(authRequestBody);
        expect(response.statusCode).toBe(401);
    });

    it('should respond with status code 401 unauthorized incase of wrong email and  correct password', async () => {
        const requestBody = {
            "name": "wrong email",
            "email": "correctEmail@gmail.com",
            "password": "ziad123"
        };
        const authRequestBody = {
            "email": "wrongEmail@gmail.com",
            "password": "ziad123"
        };

        await createUser(requestBody);
        const response = await authenticateUser(authRequestBody);
        expect(response.statusCode).toBe(401);
    });

    it('should respond with Incorrect email or password message incase of correct email and  wrong password', async () => {
        const requestBody = {
            "name": "wrong p",
            "email": "correctEmail2@gmail.com",
            "password": "ziad123"
        };
        const authRequestBody = {
            "email": "correctEmail2@gmail.com",
            "password": "no"
        };

        await createUser(requestBody);
        const response = await authenticateUser(authRequestBody);
        expect(response.statusCode).toBe(401);
        expect(response.body.message).toBe("Incorrect email or password");
    });

    it('should respond with status code 401 unauthorized incase of empty email', async () => {
        const requestBody = {
            "name": "empty email",
            "email": "emptyemaill@gmail.com",
            "password": "ziad123"
        };
        const authRequestBody = {
            "email": "",
            "password": "ziad123"
        };

        await createUser(requestBody);
        const response = await authenticateUser(authRequestBody);
        expect(response.statusCode).toBe(401);
        expect(response.body.message).toBe("Incorrect email or password");
    });

    it('should respond with status code 401 unauthorized incase of empty password', async () => {
        const requestBody = {
            "name": "empty pass",
            "email": "emptypasssss@gmail.com",
            "password": "ziad123"
        };
        const authRequestBody = {
            "email": "emptypasssss@gmail.com",
            "password": ""
        };

        await createUser(requestBody);
        const response = await authenticateUser(authRequestBody);
        expect(response.statusCode).toBe(401);
        expect(response.body.message).toBe("Incorrect email or password");
    });

    it('should respond with status code 401 unauthorized incase of null email', async () => {
        const requestBody = {
            "name": "null email",
            "email": "nullemail@gmail.com",
            "password": "ziad123"
        };
        const authRequestBody = {
            "email": null,
            "password": "ziad123"
        };

        await createUser(requestBody);
        const response = await authenticateUser(authRequestBody);
        expect(response.statusCode).toBe(401);
        expect(response.body.message).toBe("Incorrect email or password");
    });

    it('should respond with status code 401 unauthorized incase of null password', async () => {
        const requestBody = {
            "name": "null pass",
            "email": "nullpasssssss@gmail.com",
            "password": "ziad123"
        };
        const authRequestBody = {
            "email": "nullpasssssss@gmail.com",
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