const express = require("express");
const app = express();
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");


app.set("view engine","ejs");

app.use(express.urlencoded()); // cuz form ke through data aah raha hai 
// app.use(express.json());

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



//to get all the users(read)
app.get("/users",(req,res)=>{
    res.render("users",{users}) // second argument is data first is the name of the ejs file 
})




// to create a user 2 way step 1st form milega then usko fill krke we will send
app.get("/users/new",(req,res)=>{
    res.render("add")
})

// get a specific user through his or her id
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  // console.log(userId);
  const user = users.find((user) => user.id == userId);
  // console.log(user)
  res.render("show", { user });
});


//2nd step data fill krdia ab usse post karna hai on the main users wala port par jaha par sare users get kare the
app.post("/users", (req, res) => {
    const { firstName, lastName, gender, age, profession } = req.body;
  
    const userId = uuid();
    users.push({
      id: userId,
      firstName,
      lastName,
      gender,
      age,
      profession,
    });
  
    res.redirect("/users");
  });
  



//update it is also a 2 step process first get the prefilled form 
app.get("/users/:id/edit", (req, res) => {
    const userId = req.params.id;
    const user = users.find((user) => user.id == userId);
    res.render("edit", { user });
  });

//and update the prefilled details
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




//delete a specific user 
app.delete("/users/:id", (req, res) => {
    const userId = req.params.id;
    // console.log(userId)
    const userIndex = users.findIndex((user) => user.id == userId);
    // console.log(userIndex)
    users.splice(userIndex, 1);
    res.redirect("/users");
  });
  
  
app.listen("5001",()=>{
    console.log("Server is up at port:",5001);
})


