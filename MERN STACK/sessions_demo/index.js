const express = require("express");
const app = express();
const port = 5001;
const session = require("express-session")


app.use(session({
  secret:"some_secret"
}))

app.get("/",(req,res)=>{
   console.log(req.session);
res.send("Working fine!!");
})

app.get("/setsession",(req,res)=>{
    req.session.name="naetik";
    res.send("session set successfully"); 
    
})

app.get("/getsession",(req,res)=>{
 res.send(req.session);
})



app.listen(port,(req,res)=>{
    console.log("server is up and running at port no", port);
})


// if u want thatFirst purchase → user buys shoes, normal price.
// Subsequent purchases → give 10% discount.

// Ek user aaye → server uske liye ek naya session banata hai (empty).
// Agar saveUninitialized: true hai → to turant ek entry session store me ban jaayegi (bhale hi us session me kuch data na ho).
// Agar saveUninitialized: false hai → session tabhi save hoga jab tum usme kuch data daloge:
// unnecessary empty sessions store me nahi bante.


// Suppose tum ek session banaate ho aur usme req.session.user = "naetik" save karte ho.
// Ab user dusri baar request bhejta hai, par iss baar tumne session me kuch change nahi kiya.
// Agar resave: true hai → fir bhi session store me dubara save hoga.
// Agar resave: false hai → tabhi save hoga jab tumne session me kuch modify kiya ho.

// best practice is to set both as false these are sent as options 
// app.use(session({
//     secret: "my_secret_key",
//     resave: false,
//     saveUninitialized: false
//   })); like this 