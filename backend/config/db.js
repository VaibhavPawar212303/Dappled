var mongoose = require('mongoose');
const url = process.env.Mongo_URI;

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(url);
        console.log('MongoDB Connected...');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDb;