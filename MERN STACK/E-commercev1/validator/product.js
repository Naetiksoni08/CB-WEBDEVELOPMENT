const joi  = require("joi");


const createproductschema=joi.object({
    name:joi.string().required(),
    price: joi.number().min(0).max(100000).required(),
    Image:joi.string().required(),
    description:joi.string()
})

module.exports={
    createproductschema
}