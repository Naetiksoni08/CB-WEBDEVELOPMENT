const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"]
    },
    description: {
        type: String,
        required: [false, 'Product description is not required'],
    },
    rating: {  
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    price: {
        type: Number,
        min:1900,
        max:100000,
        required: [true, "Product price is required"]
    },
    Image:{
        type:String,
        required:[true]
    },
    
},
{
    timestamps:true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;



