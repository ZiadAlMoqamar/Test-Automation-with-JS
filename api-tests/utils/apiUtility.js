const { BASE_URL, AUTH_ENDPOINT, USERS_ENDPOINT, ALL_USERS_ENDPOINT, AUTH_HEADER } = require('../globals');
const { AdminRequestBody } = require('../resources/requestsBody');
const supertest = require('supertest');
const api = supertest(BASE_URL);

async function authenticateUser(requestBody) {
    const response = await api
        .post(AUTH_ENDPOINT)
        .send(requestBody);
    return response;
}

async function createUser(requestBody) {
    const response = await api
        .post(USERS_ENDPOINT)
        .send(requestBody);
    return response;
}

async function getUser(token) {
    const response = await api
        .get(USERS_ENDPOINT)
        .set(AUTH_HEADER, token);
    return response;
}

async function getUserWithoutHeader(token) {
    const response = await api
        .get(USERS_ENDPOINT)
    return response;
}

async function patchUser(token, requestBody) {
    const response = await api
        .patch(USERS_ENDPOINT)
        .set(AUTH_HEADER, token)
        .send(requestBody);
    return response;
}

async function deleteUser(token) {
    const response = await api
        .delete(USERS_ENDPOINT)
        .set(AUTH_HEADER, token);
    return response;
}
async function deleteAllUsers(requestBody) {
    const response = await api
        .delete(ALL_USERS_ENDPOINT)
        .send(
            requestBody
        );
    return response;
}

async function clearAllUsers() {
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
    getUserWithoutHeader,
    patchUser,
    deleteUser,
    deleteAllUsers,
    clearAllUsers
};