const mongoose = require("mongoose");



module.exports = async function connectdb() {
    try {
        await mongoose.connect(process.env.mongodburl);
        console.log("database is connected succesfully");
    } catch (err) {
        console.log("error in connecting database", err);
    }
}
