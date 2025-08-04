const express = require('express');
const app = express();


const todolist = ["learn node js","learn reacjs"];



app.get("/login",(req,res)=>{
    res.send("welcome to the login page");
})

app.get("/todo",(req,res)=>{
    res.send(todolist);
})

app.get("/",(req,res)=>{
   res.send("hello there this is my first server");
})


const port = 3000;
app.listen(3000,()=>{
    console.log("server is up at port number",port);
})

