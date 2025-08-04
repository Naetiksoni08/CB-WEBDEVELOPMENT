const mongoose = require('mongoose');

function dbUrl() {
      mongoose.connect('mongodb://127.0.0.1:27017/E-Commerce')
}

module.exports = dbUrl;