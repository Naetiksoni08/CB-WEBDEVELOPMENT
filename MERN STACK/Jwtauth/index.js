const express = require('express');
const Router = require("./routes/router")
const app = express();
const PORT = process.env.PORT || 5001;
const connectDB = require("./config/db")
const UserModel = require("./models/user.models"); 
const { auth } = require('./middleware/auth');
require("dotenv").config();


connectDB();

// Middleware
app.use(express.json());
app.use(Router);


// Routes
app.get('/', auth, (req, res) => {
  res.send('Working fine');
});



// Server Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});