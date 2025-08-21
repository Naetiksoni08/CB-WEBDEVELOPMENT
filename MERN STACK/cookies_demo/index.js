const express = require("express");
const app = express();
const port = 5001;
const cokkieparser = require("cookie-parser"); // require it


app.use(cokkieparser("we_need_a_password")); //use it 

app.get("/",(req,res)=>{
const {viewmode} = req.cookies;
// console.log(viewmode); 
console.log(req.cookies);
// res.send(req.cookies);
res.send(req.signedCookies);
})

app.get("/setcookie",(req,res)=>{
    res.cookie("name","abc123",{
    // maxAge:5000 // time in miliseconds
    // maxAge:7 days * 24 hours * 60 mins(1 hours mai) * 60 (1 min mai 60 secs)
    // expires: date
    signed:true
    })
    res.send("cookie set successfully"); 
    // set karte hue cookie hoga get karte hue cookies cuz ofc bhot sare get honge set one by one hoga        
    
})
// so basically in the set cookie route maine phele set kia cookie so name naetik aah gaya then tune jab mai home route pr gaya toh maine na response mai req.cookies bhej dia tha so mujhe cookie dikh raha tha so maine ab maxage 5000 yani 5 secs set kia tha toh phele mai set karunga aur fir jab / home pr request bhejunga toh cookie na apne aap 5 secs mai /home route sai bhi delete ya destroy hojayegi 



app.listen(port,(req,res)=>{
    console.log("server is up and running at port no", port);
})



// sessionStorage.setItem("rollno","15")
// undefined
// sessionStorage.getItem("rollno")
// '15'
// sessionStorage.removeItem("rollno")
// undefined
// sessionStorage.getItem("rollno")
// null
// same for local storage
// these are api methods 