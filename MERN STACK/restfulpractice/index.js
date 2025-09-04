const { render } = require("ejs");
const express = require("express");
const app = express();
const {v4 : uuid } = require("uuid");
const methodoverride = require("method-override");


app.use(express.urlencoded());
app.use(methodoverride('_method'))
app.set("view engine","ejs");




const users = [
    {
      id: uuid(),
      firstName: "Rahul",
      lastName: "Verma",
      age: 30,
      profession: "SDE-3",
    },
    {
      id: uuid(),
      firstName: "Manish",
      lastName: "Yadav",
      age: 38,
      profession: "SDET-2",
    },
  ];



app.get("/",(req,res)=>{
    res.send("working fine");
})



app.get("/users",(req,res)=>{
    res.render("users",{users});
})

app.get("/users/new",(req,res)=>{
  res.render("add");
})


app.post("/users",(req,res)=>{
  const {firstName,lastName,age,profession} = req.body; // ab tu submit opr click karega na toh tujhe toh data hia voh form mai name field ke anadar milega so form mai tujhe name field ko fill karna padega aur toh aur fir voh dtaa lo tu re.body sai access kr skata hai 
  const newid = uuid();
  users.push({
    id:newid,
    firstName,
    lastName,
    age,
    profession
    
  })

  // res.send("User created");
  res.redirect("/users");
})


app.get("/users/:id",(req,res)=>{
  const userid = req.params.id;
  const user = users.find(user=>user.id===userid);
  res.render("show",{user})
})


app.get("/users/:id/edit",(req,res)=>{
  const userid = req.params.id;
  const user = users.find(user=>user.id===userid);
  res.render("edit",{user})
})


app.put("/users/:id",(req,res)=>{
const {firstName,lastName,age,profession} = req.body;
const userid = req.params.id;
const user = users.find(user=>user.id===userid);

if(firstName) user.firstName= firstName;
if(lastName)  user.lastName = lastName;
if(age) user.age =age;
if(profession) user.profession = profession;
res.redirect("/users");


})

app.delete("/users/:id",(req,res)=>{
const userid = req.params.id;
const user = users.findIndex(user=>user.id===userid);
users.splice(user,1);
res.redirect("/users");
})



app.listen(5001,(req,res)=>{
    console.log("server is up at port ",5001);
})
