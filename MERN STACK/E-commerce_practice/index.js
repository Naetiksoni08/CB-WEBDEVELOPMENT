const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.port;
const path = require("path");
const connectdb = require("./config/db");
const ProductModel = require("./models/product.schema");
const methodoverride = require("method-override");
app.use(express.static("public"));

connectdb();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.urlencoded());
app.use(methodoverride('_method'))


app.get("/", (req, res) => {
    res.render("home");
})


app.get("/products", async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.render("list", { products });

    } catch (error) {
        console.log(error);

    }
})


app.get("/products/new", (req, res) => {
    res.render("add");
})


app.post("/products", async (req, res) => {
    const { name, price, Image, description } = req.body;
   await ProductModel.create({ name, price, Image, description });
    res.redirect("/products");
})


app.get("/products/:id",async(req,res)=>{
    const productid = req.params.id;
   const product = await ProductModel.findById(productid);
    res.render("show",{product});
})


app.get("/products/:id/edit", async (req,res)=>{
    const productid = req.params.id;
    const product = await ProductModel.findById(productid);
    res.render("edit",{product});
})

app.put("/products/:id",async (req,res)=> {
    const { name, price, Image, description } = req.body;
    const productid = req.params.id;
    const product = await ProductModel.findById(productid);

    if(name) product.name = name;
    if(price) product.price = price;
    if(Image) product.Image = Image;
    if(description) product.description = description;

    await product.save()
    res.redirect("/products");

})


app.delete("/products/:id",async (req,res)=>{
    const productid = req.params.id;
    await ProductModel.findByIdAndDelete(productid);
    res.redirect("/products");
})





app.listen(port, (req, res) => {
    console.log("server is up at port no", port);
})