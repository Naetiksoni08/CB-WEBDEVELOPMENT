const express = require('express');
const app = express();
const {v4:uuid} = require('uuid');
const methodOverride = require("method-override");



app.set("view engine","ejs");


// app.use(express.json());
app.use(express.urlencoded());

app.use(methodOverride("_method"));


const users = [
    {
      id: uuid(),
      firstName: "Rahul",
      lastName: "Verma",
      age: 30,
      gender: "male",
      profession: "SDE-3",
    },
    {
      id: uuid(),
      firstName: "Manish",
      lastName: "Yadav",
      age: 38,
      gender: "male",
      profession: "SDET-2",
    },
  ];


  app.get("/",(req,res)=>{
    res.send("working fine");
})

//get all users
app.get("/users",(req,res)=>{
    res.render('user',{users})
})

//create a form 
app.get('/users/new',(req,res)=>{
    res.render('add');
})

//get specfic user
app.get('/users/:id',(req,res)=>{
    const usersid = req.params.id;
    const user = users.find(user => user.id === usersid);
    res.render("show",{user});
})

app.post("/users",(req,res)=>{
    const {firstName,lastName,age,profession,gender} = req.body;
    const userId = uuid();
    users.push({
        id:userId,
        firstName,
        lastName,
        gender,
        age,
        profession
    })
    res.redirect('/users');
})


app.get("/users/:id/edit",(req,res)=>{
    const userId = req.params.id;
    const user = users.find((u) => u.id == userId);
    res.render('edit',{user});
})


app.put("/users/:id",(req,res)=>{
    const userId = req.params.id;
    const user = users.find((user) => user.id == userId);
    const {firstName,lastName,gender,age,profession} = req.body;
    if(firstName)   user.firstName=firstName;
    if(lastName)   user.lastName=lastName;
    if(age)   user.age=age;
    if(gender)   user.gender=gender;
    if(profession)   user.profession=profession;
    res.redirect('/users');
  })

  app.delete("/users/:id", (req, res) => {
    const userId = req.params.id;
    const userIndex = users.findIndex((user) => user.id == userId);
    users.splice(userIndex, 1);
    res.redirect("/users");
  });
  
  


  app.listen("6001",()=>{
    console.log("server is up and running at port",6001);
  })
