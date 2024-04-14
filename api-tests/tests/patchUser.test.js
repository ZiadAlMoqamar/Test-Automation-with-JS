const { authenticateUser, createUser, patchUser, patchUserWithoutHeader, getUser, clearAllUsers } = require('../utils/apiUtility');

describe("Patching user endpoint", () => {

    it('should respond with a success status code incase of valid token with updating name, email, and password', async () => {
        const email = "ziadpatch@gmail.com";
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
        const patchRequestBody = {
            "name": "ziad after",
            "email": "ziadpatched@gmail.com",
            "password": "ziadpatch12"
        };

        let token = null;
        await createUser(requestBody);
        const authResponse = await authenticateUser(authRequestBody);
        token = authResponse.body.token;

        const patchResponse = await patchUser(token,patchRequestBody);
        expect(patchResponse.statusCode).toBe(200);
    });

    it('should respond with user updated with success message incase of valid token', async () => {
        const email = "ziadpatch2@gmail.com";
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
        const patchRequestBody = {
            "name": "ziad after",
            "email": "ziadpatched32@gmail.com",
            "password": "ziadpatch12"
        };

        let token = null;
        await createUser(requestBody);
        const authResponse = await authenticateUser(authRequestBody);
        token = authResponse.body.token;

        const patchResponse = await patchUser(token,patchRequestBody);
        expect(patchResponse.statusCode).toBe(200);
        expect(patchResponse.body.message).toEqual("User updated with success");
    });

    it('should update the name, email, and password on patching all of them incase of valid token ', async () => {
        const email = "ziadpatch3@gmail.com";
        const password = "ziad123";
        const name = "ziad1";
        const updatedEmail = "ziadpatched32@gmail.com";
        const updatedPassword = "zezo";
        const updatedName = "ziad after update";
        const requestBody = {
            "name": name,
            "email": email,
            "password": password
        };
        const authRequestBody = {
            "email": email,
            "password": password
        };
        const patchRequestBody = {
            "name": updatedName,
            "email": updatedEmail,
            "password": updatedPassword
        };
        const authAfterPatchRequestBody = {
            "email": updatedEmail,
            "password": updatedPassword
        };

        let token = null;
        await createUser(requestBody);
        const authResponse = await authenticateUser(authRequestBody);
        token = authResponse.body.token;

        const patchResponse = await patchUser(token,patchRequestBody);
        expect(patchResponse.statusCode).toBe(200);
        
        const authAfterPatchResponse = await authenticateUser(authAfterPatchRequestBody);
        token = authAfterPatchResponse.body.token;
        const getResponse = await getUser(token);
        expect(getResponse.statusCode).toBe(200);
        expect(getResponse.body.name).toEqual(updatedName);
        expect(getResponse.body.email).toEqual(updatedEmail);
        expect(getResponse.body.password).toEqual(updatedPassword);
    });

    it('should update the name on patching name only incase of valid token', async () => {
        const email = "ziadpatch4@gmail.com";
        const password = "ziad123";
        const updatedName = "ziad after update";
        const requestBody = {
            "name": "ziad1",
            "email": email,
            "password": password
        };
        const authRequestBody = {
            "email": email,
            "password": password
        };
        const patchRequestBody = {
            "name": updatedName,
        };

        let token = null;
        await createUser(requestBody);
        const authResponse = await authenticateUser(authRequestBody);
        token = authResponse.body.token;

        const patchResponse = await patchUser(token,patchRequestBody);
        expect(patchResponse.statusCode).toBe(200);
        
        const getResponse = await getUser(token);
        expect(getResponse.statusCode).toBe(200);
        expect(getResponse.body.name).toEqual(updatedName);
        expect(getResponse.body.email).toEqual(email);
        expect(getResponse.body.password).toEqual(password);
    });

    it('should update the email on patching email only incase of valid token ', async () => {
        const name = "ziad1";
        const email = "ziadpatch4324@gmail.com";
        const password = "ziad123";
        const updatedEmail = "ziadpatched332432@gmail.com";
        const requestBody = {
            "name": name,
            "email": email,
            "password": password
        };
        const authRequestBody = {
            "email": email,
            "password": password
        };
        const patchRequestBody = {
            "email": updatedEmail,
        };
        const authAfterPatchRequestBody = {
            "email": updatedEmail,
            "password": password
        };

        let token = null;
        await createUser(requestBody);
        const authResponse = await authenticateUser(authRequestBody);
        token = authResponse.body.token;

        const patchResponse = await patchUser(token,patchRequestBody);
        expect(patchResponse.statusCode).toBe(200);
        
        const authAfterPatchResponse = await authenticateUser(authAfterPatchRequestBody);
        token = authAfterPatchResponse.body.token;
        const getResponse = await getUser(token);
        expect(getResponse.statusCode).toBe(200);
        expect(getResponse.body.name).toEqual(name);
        expect(getResponse.body.email).toEqual(updatedEmail);
        expect(getResponse.body.password).toEqual(password);
    });

    it('should update the password on patching password only incase of valid token ', async () => {
        const email = "ziadpatch4432562@gmail.com";
        const password = "ziad123";
        const name = "ziad1";
        const updatedPassword = "zezo";
        const requestBody = {
            "name": name,
            "email": email,
            "password": password
        };
        const authRequestBody = {
            "email": email,
            "password": password
        };
        const patchRequestBody = {
            "password": updatedPassword
        };
        const authAfterPatchRequestBody = {
            "email": email,
            "password": updatedPassword
        };

        let token = null;
        await createUser(requestBody);
        const authResponse = await authenticateUser(authRequestBody);
        token = authResponse.body.token;

        const patchResponse = await patchUser(token,patchRequestBody);
        expect(patchResponse.statusCode).toBe(200);
        
        const authAfterPatchResponse = await authenticateUser(authAfterPatchRequestBody);
        token = authAfterPatchResponse.body.token;
        const getResponse = await getUser(token);
        expect(getResponse.statusCode).toBe(200);
        expect(getResponse.body.name).toEqual(name);
        expect(getResponse.body.email).toEqual(email);
        expect(getResponse.body.password).toEqual(updatedPassword);
    });

    it('should respond with 409 status code on patching the email to already existing email in case of valid token ', async () => {
        const email = "ziadpatchexisttfgerf@gmail.com";
        const password = "ziad123";
        const name = "ziad1";
        const duplicateEmail = "ziadExisted@gmail.com"
        const requestBody = {
            "name": name,
            "email": email,
            "password": password
        };
        const anotherCreateRequestBody = {
            "name": name,
            "email": duplicateEmail,
            "password": password
        };
        const authRequestBody = {
            "email": email,
            "password": password
        };
        const patchRequestBody = {
            "email": duplicateEmail,
        };

        let token = null;
        await createUser(requestBody);
        await createUser(anotherCreateRequestBody);
        const authResponse = await authenticateUser(authRequestBody);
        token = authResponse.body.token;

        const patchResponse = await patchUser(token,patchRequestBody);
        expect(patchResponse.statusCode).toBe(409);
    });

    it('should respond with 403 status codein case of no auth header ', async () => {
        const patchedEmail = "ziadExistedfd@gmail.com";
        const patchRequestBody = {
            "email": patchedEmail,
        };

        const patchResponse = await patchUserWithoutHeader(patchRequestBody);
        expect(patchResponse.statusCode).toBe(403);
        expect(patchResponse.body.message).toEqual("jwt must be provided");
    });

    it('should respond with 403 status codein case of incorrect token ', async () => {
        const token = "incor";
        const patchedEmail = "ziadExisteddsfsd@gmail.com";
        const patchRequestBody = {
            "email": patchedEmail,
        };

        const patchResponse = await patchUser(token,patchRequestBody);
        expect(patchResponse.statusCode).toBe(403);
        expect(patchResponse.body.message).toEqual("jwt malformed");
    });

    it('should respond with 403 status codein case of empty token ', async () => {
        const token = "";
        const patchedEmail = "ziadExisteddsfsd@gmail.com";
        const patchRequestBody = {
            "email": patchedEmail,
        };

        const patchResponse = await patchUser(token,patchRequestBody);
        expect(patchResponse.statusCode).toBe(403);
        expect(patchResponse.body.message).toEqual("jwt must be provided");
    });

    it('should respond with 403 status codein case of null token ', async () => {
        const token = null;
        const patchedEmail = "ziadExisteddsfsd@gmail.com";
        const patchRequestBody = {
            "email": patchedEmail,
        };

        const patchResponse = await patchUser(token,patchRequestBody);
        expect(patchResponse.statusCode).toBe(403);
        expect(patchResponse.body.message).toEqual("jwt malformed");
    });

    it('should respond with status code 400 on patching email, name, and password with empty fields incase of valid token ', async () => {
        const email = "ziadpatch3fewf@gmail.com";
        const password = "ziad123";
        const name = "ziad1";
        const updatedEmail = "";
        const updatedPassword = "";
        const updatedName = "";
        const requestBody = {
            "name": name,
            "email": email,
            "password": password
        };
        const authRequestBody = {
            "email": email,
            "password": password
        };
        const patchRequestBody = {
            "name": updatedName,
            "email": updatedEmail,
            "password": updatedPassword
        };

        let token = null;
        await createUser(requestBody);
        const authResponse = await authenticateUser(authRequestBody);
        token = authResponse.body.token;

        const patchResponse = await patchUser(token,patchRequestBody);
        expect(patchResponse.statusCode).toBe(400);
    });

    it('should respond with status code 400 on patching email, name, and password with null fields incase of valid token ', async () => {
        const email = "ziadpatch3fewf@gmail.com";
        const password = "ziad123";
        const name = "ziad1";
        const updatedEmail = null;
        const updatedPassword = null;
        const updatedName = null;
        const requestBody = {
            "name": name,
            "email": email,
            "password": password
        };
        const authRequestBody = {
            "email": email,
            "password": password
        };
        const patchRequestBody = {
            "name": updatedName,
            "email": updatedEmail,
            "password": updatedPassword
        };

        let token = null;
        await createUser(requestBody);
        const authResponse = await authenticateUser(authRequestBody);
        token = authResponse.body.token;

        const patchResponse = await patchUser(token,patchRequestBody);
        expect(patchResponse.statusCode).toBe(400);
    });

    it('should respond with status code 400 on patching email with empty field incase of valid token ', async () => {
        const email = "ziadpatch3fewfdfsgds@gmail.com";
        const password = "ziad123";
        const name = "ziad1";
        const updatedEmail = "";
        const updatedPassword = "sad";
        const updatedName = "zezooo";
        const requestBody = {
            "name": name,
            "email": email,
            "password": password
        };
        const authRequestBody = {
            "email": email,
            "password": password
        };
        const patchRequestBody = {
            "name": updatedName,
            "email": updatedEmail,
            "password": updatedPassword
        };

        let token = null;
        await createUser(requestBody);
        const authResponse = await authenticateUser(authRequestBody);
        token = authResponse.body.token;

        const patchResponse = await patchUser(token,patchRequestBody);
        expect(patchResponse.statusCode).toBe(400);
    });

    it('should respond with status code 400 on patching name with empty field incase of valid token ', async () => {
        const email = "ziadpatch3fedsfdsgwf@gmail.com";
        const password = "ziad123";
        const name = "ziad1";
        const updatedEmail = "zezooooos@gmail.com";
        const updatedPassword = "sad";
        const updatedName = "";
        const requestBody = {
            "name": name,
            "email": email,
            "password": password
        };
        const authRequestBody = {
            "email": email,
            "password": password
        };
        const patchRequestBody = {
            "name": updatedName,
            "email": updatedEmail,
            "password": updatedPassword
        };

        let token = null;
        await createUser(requestBody);
        const authResponse = await authenticateUser(authRequestBody);
        token = authResponse.body.token;

        const patchResponse = await patchUser(token,patchRequestBody);
        expect(patchResponse.statusCode).toBe(400);
    });

    it('should respond with status code 400 on patching password with empty field incase of valid token ', async () => {
        const email = "ziadpatch3fedssdvsdffdsgwf@gmail.com";
        const password = "ziad123";
        const name = "ziad1";
        const updatedEmail = "zezooooos@gmail.com";
        const updatedPassword = "";
        const updatedName = "saddd";
        const requestBody = {
            "name": name,
            "email": email,
            "password": password
        };
        const authRequestBody = {
            "email": email,
            "password": password
        };
        const patchRequestBody = {
            "name": updatedName,
            "email": updatedEmail,
            "password": updatedPassword
        };

        let token = null;
        await createUser(requestBody);
        const authResponse = await authenticateUser(authRequestBody);
        token = authResponse.body.token;

        const patchResponse = await patchUser(token,patchRequestBody);
        expect(patchResponse.statusCode).toBe(400);
    });

    it('should respond with status code 400 on patching email with null incase of valid token ', async () => {
        const email = "zisdasadpatch3fewfdfsgds@gmail.com";
        const password = "ziad123";
        const name = "ziad1";
        const updatedEmail = null;
        const updatedPassword = "sad";
        const updatedName = "zezooo";
        const requestBody = {
            "name": name,
            "email": email,
            "password": password
        };
        const authRequestBody = {
            "email": email,
            "password": password
        };
        const patchRequestBody = {
            "name": updatedName,
            "email": updatedEmail,
            "password": updatedPassword
        };

        let token = null;
        await createUser(requestBody);
        const authResponse = await authenticateUser(authRequestBody);
        token = authResponse.body.token;

        const patchResponse = await patchUser(token,patchRequestBody);
        expect(patchResponse.statusCode).toBe(400);
    });

    it('should respond with status code 400 on patching name with null incase of valid token ', async () => {
        const email = "ziadpatcsssadh3fedsfdsgwf@gmail.com";
        const password = "ziad123";
        const name = "ziad1";
        const updatedEmail = "zezoooosadfvos@gmail.com";
        const updatedPassword = "sad";
        const updatedName = null;
        const requestBody = {
            "name": name,
            "email": email,
            "password": password
        };
        const authRequestBody = {
            "email": email,
            "password": password
        };
        const patchRequestBody = {
            "name": updatedName,
            "email": updatedEmail,
            "password": updatedPassword
        };

        let token = null;
        await createUser(requestBody);
        const authResponse = await authenticateUser(authRequestBody);
        token = authResponse.body.token;

        const patchResponse = await patchUser(token,patchRequestBody);
        expect(patchResponse.statusCode).toBe(400);
    });

    it('should respond with status code 400 on patching password with null incase of valid token ', async () => {
        const email = "ziadpatch3fedssd23432sdffdsgwf@gmail.com";
        const password = "ziad123";
        const name = "ziad1";
        const updatedEmail = "zezooooodsfsdgs@gmail.com";
        const updatedPassword = null;
        const updatedName = "saddd";
        const requestBody = {
            "name": name,
            "email": email,
            "password": password
        };
        const authRequestBody = {
            "email": email,
            "password": password
        };
        const patchRequestBody = {
            "name": updatedName,
            "email": updatedEmail,
            "password": updatedPassword
        };

        let token = null;
        await createUser(requestBody);
        const authResponse = await authenticateUser(authRequestBody);
        token = authResponse.body.token;

        const patchResponse = await patchUser(token,patchRequestBody);
        expect(patchResponse.statusCode).toBe(400);
    });

    afterAll(async () => {
        const response = await clearAllUsers();
        expect(response.statusCode).toBe(200);
    });
});