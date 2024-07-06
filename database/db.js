const mongoose = require('mongoose');


const connectDB = async () =>
{
    try {
        mongoose.set('strictQuery',true);
        await mongoose.connect("mongodb+srv://admin:user@main.3nzia0v.mongodb.net/?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
            });
            console.log('connected to database...');
    }
    catch (err) {
        console.log(err.message);
        console.log('db error');
        process.exit(1); 
    }
};

module.exports = connectDB;
