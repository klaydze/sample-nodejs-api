module.exports = {
    defaultServerResponse: {
        status: 400,
        message: '',
        body: {}
    },
    productMessage: {
        PRODUCT_CREATED: 'Product successfully created!',
        PRODUCT_RETRIEVED: 'Product successfully retreived!',
        PRODUCT_UPDATED: 'Product successfully updated!',
        PRODUCT_DELETED: 'Product successfully deleted!',
        PRODUCT_NOT_FOUND: 'Product not found!'
    },
    userMessage: {
        USER_SIGNUP_SUCCESS: 'Signup success!',
        USER_LOGIN_SUCCESS: 'Login success!',
        USER_NOT_FOUND: 'User not found!',
        USER_PASSWORD_INCORRECT: 'Incorrect password!',
        DUPLICATE_EMAIL: 'User already exist with the given email'
    },
    schemaValidationMessage: {
        INVALID_FIELDS: 'Invalid fields'
    },
    requestValidationMessage: {
        TOKEN_MISSING: 'Token missing from header!'
    },
    databaseMessage: {
        INVALID_ID: 'Invalid Id'
    }
}