const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true // for giving something unique
  },
  password: {
    type: String,
    required: true, 
  }
})

module.exports = mongoose.model("User", userSchema);