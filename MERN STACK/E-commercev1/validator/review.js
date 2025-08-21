const joi  = require("joi");


const createreviewschema=joi.object({
    text:joi.string().min(0), 
    rating: joi.number().min(1).max(5).required()
})

module.exports={
    createreviewschema
}
