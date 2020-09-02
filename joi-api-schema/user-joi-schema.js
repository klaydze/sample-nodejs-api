const joi = require('joi');

module.exports.signupSchema = joi.object().keys({
    email: joi.string().required(),
    password: joi.string().required()
});

module.exports.loginSchema = joi.object().keys({
    email: joi.string().required(),
    password: joi.string().required()
});