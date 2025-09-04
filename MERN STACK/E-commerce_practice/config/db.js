const mongoose = require("mongoose");

module.exports = async function connectdb() {
    try {
        await mongoose.connect(process.env.dburl)
        console.log("database is connected")
    } catch (error) {
        console.log("something went wrong in connecting db",error)
        
    }


}