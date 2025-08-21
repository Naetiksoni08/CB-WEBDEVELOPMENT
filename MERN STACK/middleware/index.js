const express = require('express');
const app = express();
const PORT = 5001;

// Middleware
app.use(express.json());


function greet(req,res,next) {
    console.log("Hi there !!");
    next();
}
function greet2(req,res,next) {
    console.log("Bye !!");
   res.send("bye from greet2")
}

app.use((req,res,next)=>{
console.log("GLobal Middleware");
// if u will leave this here only then it will conitnously reload cuz u gotta either do res.send or call next();
next(); 
})

app.get("/",(req,res)=>{
    res.send("working fine");
})

app.get("/test1",greet,(req,res)=>{
    res.send("hello from test1");
})
app.get("/test2",greet,(req,res)=>{
    res.send("hello from test2");
})


app.get("/test3", greet,greet2,(req,res)=>{
    res.send("hello from test3");
})

app.get("/test4",greet,greet2,(req,res)=>{
    res.send("hello from test4");
})



// Server Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



// function greet(req, res, next) {
//     console.log("Hi there!!");
//     next();
//   }
  
//   function greet2(req, res, next) {
//     console.log("Bye")
//     res.send("From greet 2 middleware")
//   }
  
//   app.use((req, res, next) => {
//     console.log("Global middleware!!!")
//     next();
//   })
  
  
//   // Routes
//   app.get('/', (req, res) => {
//     res.send('Working fine');
//   });
  
//   app.get("/test1", greet, (req, res) => {
//     res.send("hello from test1")
//   })
  
//   app.get("/test2", greet, (req, res) => {
//     res.send("hello from test2")
//   })
  
//   app.get("/test3", greet, greet2, (req, res) => {
//     res.send("hello from test3")
//   })
  
//   app.get("/test4", greet, greet2, (req, res) => {
//     res.send("hello from test4")
//   })
  