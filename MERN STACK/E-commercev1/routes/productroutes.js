const express = require("express");
const ProductModel = require("../models/product");
// const { validateproduct } = require("../middlewares/validate");
const { createproductschema } = require("../validator/product");
const validate = require("../middlewares/validate");
// const path  = require('path');

const router = express.Router();


router.get('/products',async (req,res)=>{
   try {
    const products = await ProductModel.find();
    res.render("./products/listproducts.ejs",{products}); 
    // res.send (products); // empty 
   } catch (error) {
    res.render("error",{error :  error});
    
   }
})

router.get("/products/add",(req,res)=>{
    res.render('./products/add.ejs')
})

router.post('/products',validate(createproductschema),async (req,res)=>{
    try {
        const {name,price,Image,description} = req.body;
        await ProductModel.create({name,price,Image,description});
        res.redirect('/products') // or back
    } catch (error) {
        // res.sendFile(path.join(__dirname,"views","error.html"));
        res.render("error",{error :  error});

        
    }

})

//show a product
router.get('/products/:id',async (req,res)=>{
  try {
    const productid =  req.params.id;
    const product = await ProductModel.findById(productid).populate("Review");
    // console.log(product);
    // const product = await ProductModel.findById(productid);
    res.render("products/show.ejs", { product });
  } catch (error) {
    res.render("error",{error :  error});
  }
})

router.get("/products/:id/edit",async  (req,res)=>{
  try {
    const productid =  req.params.id;
    const product = await ProductModel.findById(productid);
    res.render("products/edit.ejs",{product});
  } catch (error) {
    res.render("error",{error :  error});
  }
})

router.put("/products/:id", async (req,res)=>{
    try {
        const productid =  req.params.id;
    const {name,price,Image,description} = req.body;
    const product = await ProductModel.findById(productid);

    if(name) product.name=name;
    if(price) product.price=price;
    if(Image) product.Image=Image;
    if(description) product.description=description;
  
    await product.save();
    res.redirect("/products"); 
    } catch (error) {
        res.render("error",{error :  error});
    }
})


router.delete("/products/:id", async (req, res) => {
    try {
        const productId = req.params.id;
        await ProductModel.findByIdAndDelete(productId);
        res.redirect("/products");
    } catch (error) {
        res.render("error",{error :  error});
        
    } 



  // router.get("/login",(req,res)=>{
  //   res.render("login");
  // })
   
 
  })


module.exports = router;