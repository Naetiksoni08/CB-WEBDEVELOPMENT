// const joi = require("joi");
// const { createproductschema } = require("../validator/product");
// const { createreviewschema } = require("../validator/review");

// generic function

function validate(schema) {
 return function (req,res,next) {
     const body = req.body;
     const {error,value} = schema.validate(body);
     if(error) {
         console.log(error);
        return res.render("error.ejs",{error});
 
     }
     req.body = value;
     next();
 }
 
}


module.exports = validate
// function validateproduct(req,res,next) {
//     const body = req.body;
//     const {error,value} = createproductschema.validate(body);
//     if(error) {
//         console.log(error);
//        return res.render("error.ejs",{error});

//     }
//     req.body = value;
//     next();
// }


// function validatereview(req,res,next) {
//     const body = req.body;
//     const {error,value} = createreviewschema.validate(body);
//     if(error) {
//         console.log(error);
//        return res.render("error.ejs",{error});

//     }
//     req.body = value;
//     next();
// }





// module.exports = {
//     validateproduct,
//     validatereview
// }









// const {error,value} = createreviewschema.validate(body);basically iss line ka yehi mtlb hai na ki ek toh humare pass review ka schema hai hum usko match kr rahe hai map kr rahe hai compare karahe hai apne user ke dale hue data sai agar sab cheexz sahi hai toh render kr rdega varna error aah jayega
// Haan
// const { error, value } = createreviewschema.validate(body); ka matlab ye hota hai:

// createreviewschema
// Ye tumhara Joi ka validation schema hai jo define karta hai ki review ka data kaisa hona chahiye (e.g., string length, number range, required fields, etc.).
// .validate(body)
// Ye user ke bheje hue data (req.body) ko tumhare schema se compare / match karta hai.
// Basically: "User ka data schema ke rules follow karta hai ya nahi?"
// Destructuring { error, value }
// error → Agar data schema ke rules todta hai, toh isme details aa jayengi (e.g., "rating" must be less than or equal to 5").
// value → Validated (aur kabhi kabhi sanitized) data return hota hai — agar data sahi hai.
// Flow
// Agar error null hai → Data valid hai → tum next() call karke route proceed karwa sakte ho.and req and res cycle end ho jatti hai
// Agar error present hai → Data invalid hai → tum user ko error page ya message dikha sakte ho.



// basically understand the flow 

// index.js chalega -> it will search for product routes(app.use)
// inside product routes it will search for method joh post ho aur /products pr ho then it will run validateproduct middleware
// validate product mai body mai sai user ka data nikal jayega then it will check ki if createproductschema aur body validate ho raha hai if yes then directly next call hoga aur vapas 
// sai control jayega validateproduct pr inside the product routes and then usmai aysnc thats controller fucntion pr jayega control aur fir contorller funciton ki body ya defination chalegi


// but if validate nai hota toh seedha error message print hoga console mai aur res.render ho jayega error and next bhi call nai hoga that means wahi pr req,res cycle end ho jayegi thats it...

// now u will think then why we destruct value error toh we understood but why value 
// value isliye nikali ki agar kabhi user ko maan le 3 fields hi enter karni thi but usnai 6 karid toh value mai sirf 3 hi ayegi fields baki fields are not required toh hum generally at the end na req.body = value ko map krdete hai taki santized value req.body mai vapas aah jaye


// now we dont actually follow this procedure cuz if in future we are asked to make n middlewares then we need to make n number of validate x fuction which is not the write way we are repeating the code
 





