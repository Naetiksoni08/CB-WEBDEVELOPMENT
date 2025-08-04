const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port  = process.env.port;
const connectdb = require("./config/db");


const Product = require('./models/product');
// const User = require('./models/user'); 


app.use(express.json());
app.use(express.urlencoded())


// mongoose.connect('mongodb://127.0.0.1:27017/E-Commerce')
//     .then(() => console.log(" DB connected successfully!!!"))
//     .catch(() => console.log("Something Went Wrong !!!"));  


app.get('/healthcheck', (req, res) => {
    res.send('Working fine!!!');
});



app.get('/products',async(req,res)=>{
    const products = await Product.find();
    res.send(products);

})
app.listen(port, () => {
    console.log(" Server is up at port number",port);
});
