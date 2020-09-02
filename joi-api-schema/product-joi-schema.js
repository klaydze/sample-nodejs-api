const joi = require('joi');

module.exports.createSchema = joi.object().keys({
    name: joi.string().required(),
    price: joi.number().required(),
    brand: joi.string().required()
});

module.exports.getProductsSchema = joi.object().keys({
    skip: joi.string(),
    limit: joi.string()
})

module.exports.updateSchema = joi.object().keys({
    name: joi.string(),
    price: joi.number(),
    brand: joi.string()
});