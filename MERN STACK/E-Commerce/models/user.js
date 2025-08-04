const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User name is required"],
        minlength: 2,
        maxlength: 50
    },
    phoneNumber: {
        type: Number,
        required: [true, "Phone number is required"],
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
