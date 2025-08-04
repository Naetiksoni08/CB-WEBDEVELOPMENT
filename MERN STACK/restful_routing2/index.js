const express = require("express");
const app = express();
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");


app.set("view engine", "ejs");

app.use(express.urlencoded());

app.use(methodOverride("_method"));



const todos = [
  {
    id: uuid(),
    Task: "Learn Nodejs",
  },
  {
    id: uuid(),
    Task: "Learn Reactjs",
  },
  {
    id: uuid(),
    Task: "Learn MongoDB",
  },
  {
    id: uuid(),
    Task: "Learn Expressjs",
  },
];


app.get("/", (req, res) => {
  res.send("working fine");
})


//   get all todos
app.get("/todos", (req, res) => {
  res.render("todos", { todos })
})


app.get("/todos/new", (req, res) => {
  // res.send("todo created")
  res.render("add");
})

app.get('/todos/:id',(req,res)=>{
  const todoid = req.params.id;
  // console.log(todoid);
  const todo = todos.findIndex((todo) => todo.id == todoid);
  // console.log(todo);
  res.render("show",{todo});
})



app.post("/todos", (req, res) => {
  const { Task } = req.body;

  const userId = uuid();
  todos.push({
    id: userId,
    Task
  });

  res.redirect("/todos");
});

//update 
app.get('/todos/:id/edit',(req,res)=>{
const todoid = req.params.id;
const todo = todos.find((todo) => todo.id == todoid);
res.render("edit", { todo });
})


app.put("/todos/:id",(req,res)=>{
  const todoId = req.params.id;
  const todo = todos.find((todo) => todo.id == todoId);
  const {Task} = req.body;
  if(Task)  todo.Task=Task;
  res.redirect("/todos");
})

app.delete("/todos/:id", (req, res) => {
  const todoId  = req.params.id;
  const todoIndex = todos.findIndex((todo) => todo.id == todoId);
  todos.splice(todoIndex, 1);
  res.redirect("/todos");
});




app.listen("4001", () => {
  console.log("Server is up at port:", 4001);
})

