const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.port;
const connectdb = require("./config/db");
const ProductModel = require("./models/product");



connectdb();


app.set("view engine", "ejs");


app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
 res.render("home")
 });
 
 
app.get("/products",async (req,res)=>{
try {
const product = await ProductModel.find()
res.render("./products/listproduct",{product});
} catch (error) {
    console.log(error);
}
})

app.get("/products/add",(req,res)=>{
    res.render("./products/add")
})

app.post("/products",async (req,res)=>{
    const{name,Image,price,description} = req.body;
    await ProductModel.create({name,Image,price,description});
    res.redirect("/products");
})

app.get("/products/:id",async (req,res)=>{
   const productId = req.params.id;
   const product = await ProductModel.findById(productId);
   res.render("products/show",{product})
})


app.listen(port,(req,res)=>{
    console.log("server is up at port",port);
})