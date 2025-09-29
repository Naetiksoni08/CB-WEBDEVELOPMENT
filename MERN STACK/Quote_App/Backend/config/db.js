const mongoose = require("mongoose");
require("dotenv").config();
 
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongoDbURL);
   console.log("db connected");
  } catch (error) {
    console.log("Error in DB connection", error)
  }
};

module.exports = connectDB;