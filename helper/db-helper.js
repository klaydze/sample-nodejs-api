const mongoose = require('mongoose');
const constants = require('../constants');

module.exports.formatMongoDBData = (data) => {
    if (Array.isArray(data)) {
        let list = [];

        for (value of data) {
            list.push(value.toObject());
        }

        return list;
    }

    return data.toObject();
}

module.exports.checkObjectId = (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error(constants.databaseMessage.INVALID_ID);
    }
}