const User = require('../database/models/user-model');
const constants = require('../constants');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { formatMongoDBData } = require('../helper/db-helper');

/**
 * Sign up.
 * @param {*} credential New credential to be save in the database.
 */
module.exports.signup = async ({ email, password }) => {
    try {
        const user = await User.findOne({ email: email });

        if (user) {
            throw new Error(constants.userMessage.DUPLICATE_EMAIL)
        }

        password = await bcrypt.hash(password, 12);

        const newUser = new User({ email: email, password: password });
        let result = await newUser.save();

        return formatMongoDBData(result);
    } catch (error) {
        console.log('Something went wrong: Service: signup', error);
        throw new Error(error);
    }
}

module.exports.login = async ({ email, password }) => {
    try {
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error(constants.userMessage.USER_NOT_FOUND)
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            throw new Error(constants.userMessage.USER_PASSWORD_INCORRECT)
        }

        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY || 'my-secret-key', { expiresIn: '1h' });

        return { token };

    } catch (error) {
        console.log('Something went wrong: Service: login', error);
        throw new Error(error);
    }
}
