const mongoose = require("mongoose");
require('dotenv').config(); // Add this line to load .env file

const conn = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGODB_URI).then(() => {
            console.log("Connected");
        });
    } catch (error) {
        res.status(400).json({
            message: "Not Connected",
        });
    }
};

conn();
