const constants = require('../constants');
const userService = require('../services/user-service');

module.exports.signup = async (req, res) => {
    let response = { ...constants.defaultServerResponse };

    try {
        const signupResult = await userService.signup(req.body);
        response.status = 200;
        response.message = constants.userMessage.USER_SIGNUP_SUCCESS;
        response.body = signupResult;
    } catch (error) {
        console.log('Something went wrong: Controller: signup', error);
        response.message = error.message;
    }

    return res.status(response.status).send(response);
}

module.exports.login = async (req, res) => {
    let response = { ...constants.defaultServerResponse };

    try {
        const loginResult = await userService.login(req.body);
        response.status = 200;
        response.message = constants.userMessage.USER_LOGIN_SUCCESS;
        response.body = loginResult;
    } catch (error) {
        console.log('Something went wrong: Controller: login', error);
        response.message = error.message;
    }

    return res.status(response.status).send(response);
}