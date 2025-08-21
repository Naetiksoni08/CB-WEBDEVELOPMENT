require("dotenv").config();
const express = require('express');
const connectdb = require('./config/db');
const ProductModel = require("./models/product");
const PORT = process.env.PORT;
const app = express();
const methodoverride = require("method-override");
const ejsmate = require('ejs-mate');

connectdb(); 
app.engine('ejs', ejsmate);

app.set("view engine","ejs");
app.use(express.urlencoded());
app.use(methodoverride("_method"));
app.use(express.static("public"));


// app.get('/healthcheck', (req, res) => {
//     res.send("working fine");
// });




app.get('/', (req, res) => {
   res.render('home.ejs');
});



const productroutes = require("./routes/productroutes");
const reviewroutes = require("./routes/reviewroutes");
app.use(productroutes);//mouting
app.use(reviewroutes);//mouting

  


app.listen(PORT, () => {
    console.log("server is up at port", PORT);
})