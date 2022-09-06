require("dotenv").config();

const mongoose = require("mongoose");
const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log("Connected MongoDB");
    } catch (error) {
        console.error(error);
        console.log("Failed to connect MongoDB");
        process.exit(1);
    }
}

module.exports = connectMongoDB;