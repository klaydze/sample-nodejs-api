const productService = require('../services/product-service');
const constants = require('../constants');

module.exports.create = async (req, res) => {
    let response = { ...constants.defaultServerResponse }

    try {
        const result = await productService.create(req.body);

        response.status = 200;
        response.message = constants.productMessage.PRODUCT_CREATED;
        response.body = result;

    } catch (error) {
        console.log('Something went wrong: Controller: create', error);

        response.message = error.message;
    }

    return res.status(response.status).send(response);
}

module.exports.get = async (req, res) => {
    let response = { ...constants.defaultServerResponse };

    try {
        const result = await productService.get(req.query);

        response.status = 200;
        response.message = constants.productMessage.PRODUCT_RETRIEVED;
        response.body = result;
    } catch (error) {
        console.log('Something went wrong: Controller: get', error);

        response.message = error.message;
    }

    return res.status(response.status).send(response);
}

module.exports.getById = async (req, res) => {
    let response = { ...constants.defaultServerResponse };

    try {
        const result = await productService.getById(req.params);

        response.status = 200;
        response.message = constants.productMessage.PRODUCT_RETRIEVED;
        response.body = result;
    } catch (error) {
        console.log('Something went wrong: Controller: getById', error);

        response.message = error.message;
    }

    return res.status(response.status).send(response);
}

module.exports.update = async (req, res) => {
    let response = { ...constants.defaultServerResponse };

    try {
        const result = await productService.update({
            id: req.params.id,
            data: req.body
        });

        response.status = 200;
        response.message = constants.productMessage.PRODUCT_UPDATED;
        response.body = result;
    } catch (error) {
        console.log('Something went wrong: Controller: update', error);

        response.message = error.message;
    }

    return res.status(response.status).send(response);
}

module.exports.deleteById = async (req, res) => {
    let response = { ...constants.defaultServerResponse };

    try {
        const result = await productService.deleteById(req.params);

        response.status = 200;
        response.message = constants.productMessage.PRODUCT_DELETED;
        response.body = result;
    } catch (error) {
        console.log('Something went wrong: Controller: deleteById', error);

        response.message = error.message;
    }

    return res.status(response.status).send(response);
}