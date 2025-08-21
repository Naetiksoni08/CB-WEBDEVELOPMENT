const express = require("express");
const reviewModel = require("../models/review");
const ProductModel = require("../models/product");
// const { validatereview } = require("../middlewares/validate");
const { createreviewschema } = require("../validator/review");
const validate = require("../middlewares/validate");
const router = express.Router();


router.post("/products/:productId/reviews",validate(createreviewschema),async (req,res)=>{
   try {
     // begin transactions
    const productId = req.params.productId;
    const {rating,text} = req.body;
    const review =  await reviewModel.create({rating,text});
    const product = await ProductModel.findById(productId);
    product.Review.push(review._id);
    await product.save();
    // commit transaction
    res.redirect(`/products/${productId}`);
    
   } catch (error) {
    // roll back transaction 
    res.render("error",{error :  error}); 
   }
})


// router.delete("/products/:productId/reviews/:reviewId", async (req, res) => {
//    try {
//      const { productId, reviewId } = req.params;
//      await ProductModel.findByIdAndUpdate(
//        productId,
//        { $pull: { Review: { _id: reviewId } } } // removes the review from array
//      );
 
//      res.redirect(`/products/${productId}`);
//    } catch (error) {
//      res.render("error", { error });
//    }
//  });



module.exports=router;
