const Product = require('../database/models/product-model');
const constants = require('../constants');
const { formatMongoDBData, checkObjectId } = require('../helper/db-helper');

/**
 * Create new Product information.
 * @param {*} data Product information to be save in the database.
 */
module.exports.create = async (data) => {
    try {
        let product = new Product({ ...data });
        let result = await product.save();

        return formatMongoDBData(result);
    } catch (error) {
        console.log('Something went wrong: Service: create', error);
        throw new Error(error);
    }
}

module.exports.get = async ({ skip = 0, limit = 10 }) => {
    try {
        const products = await Product.find({})
            .skip(parseInt(skip))
            .limit(parseInt(limit));

        return formatMongoDBData(products);
    } catch (error) {
        console.log('Something went wrong: Service: get', error);
        throw new Error(error);
    }
}

module.exports.getById = async ({ id }) => {
    try {
        checkObjectId(id);

        const product = await Product.findById(id);

        if (!product) {
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }

        return formatMongoDBData(product);
    } catch (error) {
        console.log('Something went wrong: Service: getById', error);
        throw new Error(error);
    }
}

module.exports.update = async ({ id, data }) => {
    try {
        checkObjectId(id);

        const product = await Product.findOneAndUpdate(
            { _id: id },
            data,
            { new: true }
        );

        if (!product) {
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }

        return formatMongoDBData(product);
    } catch (error) {
        console.log('Something went wrong: Service: update', error);
        throw new Error(error);
    }
}

module.exports.deleteById = async ({ id }) => {
    try {
        checkObjectId(id);

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }

        return formatMongoDBData(product);
    } catch (error) {
        console.log('Something went wrong: Service: deleteById', error);
        throw new Error(error);
    }
}
