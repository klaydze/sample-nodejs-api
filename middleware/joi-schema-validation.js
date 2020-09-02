const productSchema = require('../joi-api-schema/product-joi-schema');
const constants = require('../constants');

const validateObjectSchema = (data, schema) => {
    // convert: false will not attemp to convert the string number value to a number
    const result = schema.validate(data, { convert: false });

    if (result.error) {
        const errorDetails = result.error.details.map(err => {
            return {
                error: err.message,
                path: err.path
            }
        });

        return errorDetails;
    }

    return null;
}

module.exports.validateBody = (schema) => {
    return (req, res, next) => {
        let response = { ...constants.defaultServerResponse };
        const error = validateObjectSchema(req.body, schema);

        if (error) {
            response.body = error;
            response.message = constants.schemaValidationMessage.INVALID_FIELDS;

            return res.status(response.status).send(response);
        }

        return next();
    }
}

module.exports.validateQueryParams = (schema) => {
    return (req, res, next) => {
        let response = { ...constants.defaultServerResponse };
        const error = validateObjectSchema(req.query, schema);

        if (error) {
            response.body = error;
            response.message = constants.schemaValidationMessage.INVALID_FIELDS;

            return res.status(response.status).send(response);
        }

        return next();
    }
}