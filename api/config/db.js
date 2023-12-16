const mongoose = require("mongoose");
const { mongodbURL } = require("../secret");
const connectDatabase = async () => {
    try {
        await mongoose.connect(mongodbURL)
        console.log("connection to db is successfully established");

        mongoose.connection.on('error', (error) => {
            console.error('db connection error:', error);
        })
    } catch (error) {
        console.error('could not connect in db:', error.toString());
    }
}
module.exports=connectDatabase;
