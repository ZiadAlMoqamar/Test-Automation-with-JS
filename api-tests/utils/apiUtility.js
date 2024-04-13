const { BASE_URL, AUTH_ENDPOINT, USERS_ENDPOINT, ALL_USERS_ENDPOINT, AUTH_HEADER } = require('../globals');
const  { AdminRequestBody } = require('../resources/requestsBody');
const supertest = require('supertest');
const api = supertest(BASE_URL);

async function authenticateUser(email, password) {
    const response = await api.post(AUTH_ENDPOINT).send({
        email,
        password
    });
    return response;
}

async function createUser(requestObject) {
    const response = await api
        .post(USERS_ENDPOINT)
        .send(requestObject);
    return response;
}

async function getUser(token) {
    const response = await api
        .get(USERS_ENDPOINT)
        .set(AUTH_HEADER, token);
    return response;
}

async function patchUser(token) {
    const response = await api
        .patch(USERS_ENDPOINT)
        .set(AUTH_HEADER, token);
    return response;
}

async function deleteUser(token) {
    const response = await api
        .delete(USERS_ENDPOINT)
        .set(AUTH_HEADER, token);
    return response;
}
async function deleteAllUsers() {
    const response = await api
        .delete(ALL_USERS_ENDPOINT)
        .send(
            AdminRequestBody
        );
    return response;
}

module.exports = {
    createUser,
    authenticateUser,
    getUser,
    patchUser,
    deleteUser,
    deleteAllUsers,
};