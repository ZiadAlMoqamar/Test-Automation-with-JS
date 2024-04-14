const { authenticateUser, createUser, deleteUser, deleteAllUsers, getUser, clearAllUsers } = require('../utils/apiUtility');
const { AdminRequestBody } = require('../resources/requestsBody');

describe("Deleting all users endpoint", () => {

    it('should respond with success status code incase of correct request body', async () => {
        const email = "delete12@gmail.com";
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

        const email2 = "delete234@gmail.com";
        const password2 = "ziad123";
        const requestBody2 = {
            "name": "zezo",
            "email": email2,
            "password": password2
        };
        const authRequestBody2 = {
            "email": email2,
            "password": password2
        };

        let token = null;
        let token2 = null;
        await createUser(requestBody);
        await createUser(requestBody2);
        const response = await authenticateUser(authRequestBody);
        expect(response.statusCode).toBe(200);
        expect(response.body.token).toBeDefined();
        token = response.body.token;

        const response2 = await authenticateUser(authRequestBody2);
        expect(response2.statusCode).toBe(200);
        expect(response2.body.token).toBeDefined();
        token2 = response2.body.token;

        const deleteResponse = await deleteAllUsers(AdminRequestBody);
        expect(deleteResponse.statusCode).toBe(200);
    });

    it('should respond with users deleted with success message incase of correct request body', async () => {
        const email = "delete12@gmail.com";
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

        const email2 = "delete234@gmail.com";
        const password2 = "ziad123";
        const requestBody2 = {
            "name": "zezo",
            "email": email2,
            "password": password2
        };
        const authRequestBody2 = {
            "email": email2,
            "password": password2
        };

        let token = null;
        let token2 = null;
        await createUser(requestBody);
        await createUser(requestBody2);
        const response = await authenticateUser(authRequestBody);
        expect(response.statusCode).toBe(200);
        expect(response.body.token).toBeDefined();
        token = response.body.token;

        const response2 = await authenticateUser(authRequestBody2);
        expect(response2.statusCode).toBe(200);
        expect(response2.body.token).toBeDefined();
        token2 = response2.body.token;

        const deleteResponse = await deleteAllUsers(AdminRequestBody);
        expect(deleteResponse.statusCode).toBe(200);
        expect(deleteResponse.body.message).toEqual("Users deleted with success");
    });

    it('should delete all users incase of correct request body', async () => {
        const email = "delete12324r23@gmail.com";
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

        const email2 = "delete23432234@gmail.com";
        const password2 = "ziad123";
        const requestBody2 = {
            "name": "zezo",
            "email": email2,
            "password": password2
        };
        const authRequestBody2 = {
            "email": email2,
            "password": password2
        };

        let token = null;
        let token2 = null;
        await createUser(requestBody);
        await createUser(requestBody2);
        const response = await authenticateUser(authRequestBody);
        expect(response.statusCode).toBe(200);
        expect(response.body.token).toBeDefined();
        token = response.body.token;

        const response2 = await authenticateUser(authRequestBody2);
        expect(response2.statusCode).toBe(200);
        expect(response2.body.token).toBeDefined();
        token2 = response2.body.token;

        const deleteResponse = await deleteAllUsers(AdminRequestBody);
        expect(deleteResponse.statusCode).toBe(200);

        const getResponse = await getUser(token);
        expect(getResponse.statusCode).toBe(403);
        expect(getResponse.body.message).toEqual("Unauthorized");

        const getResponse2 = await getUser(token2);
        expect(getResponse2.statusCode).toBe(403);
        expect(getResponse2.body.message).toEqual("Unauthorized");
    });

    it('should respond with 403 status code incase of incorrect admin request key', async () => {
        const deleteResponse = await deleteAllUsers(
            {
                "key": "keyadmin123"
            }
        );
        expect(deleteResponse.statusCode).toBe(403);
        expect(deleteResponse.body.message).toEqual("Unauthorized access");
    });

    it('should respond with 403 status code incase of incorrect admin request value', async () => {
        const deleteResponse = await deleteAllUsers(
            {
                "key_admin": "key"
            }
        );
        expect(deleteResponse.statusCode).toBe(403);
        expect(deleteResponse.body.message).toEqual("Unauthorized access");
    });

    it('should respond with 403 status code incase of incorrect admin request key and value', async () => {
        const deleteResponse = await deleteAllUsers(
            {
                "key": "key"
            }
        );
        expect(deleteResponse.statusCode).toBe(403);
        expect(deleteResponse.body.message).toEqual("Unauthorized access");
    });

    it('should respond with 403 status code incase of empty admin request value', async () => {
        const deleteResponse = await deleteAllUsers(
            {
                "key_admin": ""
            }
        );
        expect(deleteResponse.statusCode).toBe(403);
        expect(deleteResponse.body.message).toEqual("Unauthorized access");
    });

    it('should respond with 403 status code incase of null admin request value', async () => {
        const deleteResponse = await deleteAllUsers(
            {
                "key_admin": null
            }
        );
        expect(deleteResponse.statusCode).toBe(403);
        expect(deleteResponse.body.message).toEqual("Unauthorized access");
    });

    it('should respond with 403 status code incase of empty request body', async () => {
        const deleteResponse = await deleteAllUsers({});
        expect(deleteResponse.statusCode).toBe(403);
        expect(deleteResponse.body.message).toEqual("Unauthorized access");
    });

    afterAll(async () => {
        const response = await clearAllUsers();
        expect(response.statusCode).toBe(200);
    });
});