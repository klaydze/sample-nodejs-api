const express = require('express');
const userController = require('../controller/user-controller');
const joiSchemaValidation = require('../middleware/joi-schema-validation');
const userSchema = require('../joi-api-schema/user-joi-schema');

const router = express.Router();

router.post('/signup',
    joiSchemaValidation.validateBody(userSchema.signupSchema),
    userController.signup);

router.post('/login',
    joiSchemaValidation.validateBody(userSchema.loginSchema),
    userController.login);

module.exports = router;