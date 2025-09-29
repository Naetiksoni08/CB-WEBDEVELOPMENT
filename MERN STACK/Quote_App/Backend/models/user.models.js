const mongoose = require("mongoose");


  userSchema = mongoose.Schema({

  Fullname: {
    type: String,
    required: true,
    trim: true // to trim and remove the spaces from front nd back
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
})


const UserModel = mongoose.model("User",userSchema);
module.exports = UserModel;