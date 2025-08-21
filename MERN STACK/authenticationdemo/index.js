const mongoose = require('mongoose');
const express = require("express");
const usermodel = require('./models/usermodel');
const app = express();
const path = require("path");
const port = 5001;
const session = require("express-session");



mongoose.connect('mongodb://127.0.0.1:27017/Auth_demo')
 .then(()=>console.log("DBconnected successfully"))
 .catch(()=>console.log("error in database connection"));


 app.use(express.urlencoded({ extended: true }));
 app.use(session({
    secret:"some_secret"
 }))

//statefull
 const isAuthenticated = (req, res, next) => {
    if(!req.session.username) {
      return res.redirect("/login");
    }
    next();
  }

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



app.get("/",isAuthenticated,(req,res)=>{
    const username = req.session.username;
    res.render("home",{username});
 })

 app.get("/login",(req,res)=>{
    res.render("login")
 })

 app.get("/register",(req,res)=>{
    res.render("register")
 })


 app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    // TODO: convert password to hash
    await usermodel.create({ username, password });
    res.redirect("/login");
  });
  


  app.post("/login", async (req, res) => {
    const { username, password } = req.body;
  
    const user = await usermodel.findOne({ username });
  
    // console.log("Found user in DB:", user);
    // console.log("Entered username:", username);
    // console.log("Entered password:", password);
  
    if (!user || user.password != password) {
      return res.redirect("/login");
    }
  
    req.session.username = user.username;
    res.redirect("/");
  });

  app.get("/logout",(req,res)=>{
    delete req.session.username;
    res.redirect("/login")
  })


 app.listen(port,(req,res)=>{
    console.log("server is up and running at port no", port);
})

