const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useFindAndModify: false });
        console.log("Database connected!");
    } catch (error) {
        console.log('Database connection error', error);
        throw new Error(error);
    }
}