const express = require("express");
const app = express();
const path = require('path');

const todos = [
    {
      "id": 1,
      "todo": "Do something nice for someone you care about",
      "completed": false,
      "userId": 152
    },
    {
      "id": 2,
      "todo": "Memorize a poem",
      "completed": true,
      "userId": 13
    },
    {
      "id": 3,
      "todo": "Watch a classic movie",
      "completed": true,
      "userId": 68
    },
    {
      "id": 4,
      "todo": "Watch a documentary",
      "completed": false,
      "userId": 84
    },
    {
      "id": 5,
      "todo": "Invest in cryptocurrency",
      "completed": false,
      "userId": 163
    },
    {
      "id": 6,
      "todo": "Contribute code or a monetary donation to an open-source software project",
      "completed": false,
      "userId": 69
    },
    {
      "id": 7,
      "todo": "Solve a Rubik's cube",
      "completed": true,
      "userId": 76
    },
    {
      "id": 8,
      "todo": "Bake pastries for yourself and neighbor",
      "completed": true,
      "userId": 198
    },
    {
      "id": 9,
      "todo": "Go see a Broadway production",
      "completed": false,
      "userId": 7
    },
    {
      "id": 10,
      "todo": "Write a thank you letter to an influential person in your life",
      "completed": true,
      "userId": 9
    },
    {
      "id": 11,
      "todo": "Invite some friends over for a game night",
      "completed": false,
      "userId": 104
    },
    {
      "id": 12,
      "todo": "Have a football scrimmage with some friends",
      "completed": false,
      "userId": 32
    },
    {
      "id": 13,
      "todo": "Text a friend you haven't talked to in a long time",
      "completed": true,
      "userId": 2
    },
    {
      "id": 14,
      "todo": "Organize pantry",
      "completed": false,
      "userId": 46
    },
    {
      "id": 15,
      "todo": "Buy a new house decoration",
      "completed": true,
      "userId": 105
    },
    {
      "id": 16,
      "todo": "Plan a vacation you've always wanted to take",
      "completed": true,
      "userId": 162
    },
    {
      "id": 17,
      "todo": "Clean out car",
      "completed": false,
      "userId": 71
    },
    {
      "id": 18,
      "todo": "Draw and color a Mandala",
      "completed": true,
      "userId": 6
    },
    {
      "id": 19,
      "todo": "Create a cookbook with favorite recipes",
      "completed": true,
      "userId": 53
    },
    {
      "id": 20,
      "todo": "Bake a pie with some friends",
      "completed": false,
      "userId": 162
    },
    {
      "id": 21,
      "todo": "Create a compost pile",
      "completed": false,
      "userId": 13
    },
    {
      "id": 22,
      "todo": "Take a hike at a local park",
      "completed": true,
      "userId": 37
    },
    {
      "id": 23,
      "todo": "Take a class at local community center that interests you",
      "completed": true,
      "userId": 65
    },
    {
      "id": 24,
      "todo": "Research a topic interested in",
      "completed": true,
      "userId": 130
    },
    {
      "id": 25,
      "todo": "Plan a trip to another country",
      "completed": false,
      "userId": 140
    },
    {
      "id": 26,
      "todo": "Improve touch typing",
      "completed": false,
      "userId": 178
    },
    {
      "id": 27,
      "todo": "Learn Express.js",
      "completed": false,
      "userId": 194
    },
    {
      "id": 28,
      "todo": "Learn calligraphy",
      "completed": false,
      "userId": 80
    },
    {
      "id": 29,
      "todo": "Have a photo session with some friends",
      "completed": true,
      "userId": 91
    },
    {
      "id": 30,
      "todo": "Go to the gym",
      "completed": true,
      "userId": 142
    }
]

app.get("/", (req, res) => {
    res.send("hello from home route");
  })
  
app.get("/todos", (req, res) => {
  res.json(todos);
})

app.get("/about",(req,res)=>{
  res.sendFile(path.join(__dirname,"views","about.html"));
})

app.get("/index",(req,res)=>{
  res.sendFile(path.join(__dirname,"views","index.html"));
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname,"views","error.html"));
})
//note this star thing works only on version 4 of express so basically what i did i 
// npm uninstall express
// npm install express@4
// then i made a file in views named error.html
// then i wrote these lines * and then uskee baad server restart karke chalaya toh img aah rhai thi
// ek aur cheez agar tujhe vapas version 4 sai 5 par jana ho toh use npm uninstall express then uske baad npm install express@5


app.listen(5001, () => {
  console.log("Server is up at port", 5001);
})

// path parameters // params//path params
// query parameters//query/query params
// these 2 are used to create dynamic routes