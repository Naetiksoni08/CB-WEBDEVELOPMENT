const express = require("express");
const app = express();


app.set("view engine","ejs");


app.get("/",(req,res)=>{
    res.send("working fine");
})

app.get("/random",(req,res)=> {
const rand = Math.floor(Math.random()*10);
// res.json(rand);

res.render("index.ejs",{
    title: "My App",
    randomnumber : rand
//here random number is the key and the rand is the value i can also do like rand just rand iss case mai rand hi key hogi aur rand hi value 
})
})

app.get("/todos",(req,res)=>{
    const todos = [
        "Learn NodeJs",
        "Learn ReactJs"
    ]
    res.render("todos.ejs",{
        todos
    })



})



app.listen("5001",()=>{
    console.log("Server is up at port:",5001);
})
