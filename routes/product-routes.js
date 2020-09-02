const express = require('express');
const productController = require('../controller/product-controller');
const joiSchemaValidation = require('../middleware/joi-schema-validation');
const tokenValidation = require('../middleware/token-validation');
const productSchema = require('../joi-api-schema/product-joi-schema');

const router = express.Router();

router.post('/',
    tokenValidation.validateToken,
    joiSchemaValidation.validateBody(productSchema.createSchema),
    productController.create);

router.put('/:id',
    tokenValidation.validateToken,
    joiSchemaValidation.validateBody(productSchema.updateSchema),
    productController.update);

router.delete('/:id', productController.deleteById);

router.get('/',
    tokenValidation.validateToken,
    joiSchemaValidation.validateQueryParams(productSchema.getProductsSchema),
    productController.get);

router.get('/:id',
    tokenValidation.validateToken,
    productController.getById);

module.exports = router;