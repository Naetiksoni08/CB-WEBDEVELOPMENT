const express = require('express');
const app = express();
const {v4: uuid}= require('uuid'); 

const todos = [
    {
      "id": uuid(),
      "todo": "Do something nice for someone you care about",
      "completed": false,
     
    },
    {
      "id": uuid(),
      "todo": "Memorize a poem",
      "completed": true,
  
    },
    {
      "id": uuid(),
      "todo": "Watch a classic movie",
      "completed": true,
    }
  ];
//middleware  
  app.use(express.json()); // this is the middleware (this is for only json data)
  // app.use(express.urlencoded());
// app.use means ki chahe koi bhi request ho post ho get ho put ho patch ho sabhi ke liye ye express.json() middleware chalega
// iska kaam yeh hai ki joh humne body mai apna 3rd todo bheja hai ye usse parse karega (json hai voh data) aur fir usko req.body mai bhej dega 
//ek aur middleware hota hai humare pass express.urlencoded() iska kaam yeh hai ki agar humara data url encoded hai toh usko parse karega mtlb form ke liye kaam karta hai 
// ab jab tu request send karega na toh joh tera undefined aah raha tha voh ab na aakr 4th id ka todo aah jayega
// just server up karne ke liye likha tha yeh 


// CRUD OPERATION

app.get("/",(req,res)=>{
  res.send("testing");
})


//Create(add)
app.post("/todos",(req,res)=>{
  // console.log(req.body);
  const{todo,completed} = req.body;
  const id = uuid();
  // todos.push(req.body);
  todos.push({id,todo,completed});
  res.json(todos);
});


// Read
app.get("/todos",(req,res)=>{
    res.json(todos);
})

//update
app.post("/todos/update/:id",(req,res)=>{
  const{todo,completed} = req.body;
  const id = req.params.id;
  const todoObj = todos.find(todo => todo.id==id);
  if(todoObj) {
    todoObj.todo = todo;
    todoObj.completed = completed;
  }
  res.json(todos);
  
})


//delete
app.post("/todos/delete",(req,res)=>{
  const id = req.body.id;
  const todoindex = todos.findIndex(todo=>todo.id==id);
  if(todoindex != -1) {
    todos.splice(todoindex,1);

  }
  res.json(todos);
})


app.listen(5001,()=>{
  console.log("server is up at ",5001);
});

// Moreover, if u want to get a specific todo then  do this
app.get("/todos/:id",(req,res)=>{
  const id = req.params.id;
  const todoid = todos.find(todo=>todo.id==id);
  res.json(todoid);
})


// // app.post("/todos",(req,res)=>{
// //  console.log(req.body);//undefined milgaya 
// // todos.push(req.body); // isse hume joh humne data body mai dala tha na mtlb joh todo aya tha voh ab officailly todos mai add ho jayega 
//  //why undefeined kyuki by defualt express body ko add nahi karta hai baiscally parse nai karta toh we need a middleware
//   // res.send("testing");
//   // res.send(todos);
// // })


// // for uuid thing 
// // humai na sirf todo aur completed bhejna hai toh hum body mai sirf todo aur completed bhejenge
// // app.post("/todos",(req,res)=>{
// //   const{todo,completed} = req.body; // destructuring
// //   const id = uuid(); // generate unique id
// //   res.send({id,todo,completed}); // send back the id, todo and completed status
// // });

// // [
// //   {
// //     "id": "5e632f3a-92f7-4f36-bef4-d2709560323a",
// //     "todo": "Do something nice for someone you care about",
// //     "completed": false,
// //     "userId": 152
// //   },
// //   {
// //     "id": "4c2b9392-ac34-4a55-a557-f1e88fe6904a",
// //     "todo": "Memorize a poem",
// //     "completed": true,
// //     "userId": 13
// //   },
// //   {
// //     "id": "e1def809-c841-43f0-b82b-94b7ef77fe1e",
// //     "todo": "Watch a classic movie",
// //     "completed": true,
// //     "userId": 68
// //   }
// // ]


// // yeh milli hai humme unique id samjh 
// // so basically humne kya kia phele npm install kia uuid ko require ki verison 4 ko aur fir id ki jaga humne har todo mai uuid ko call kardia
// //fir we said ki bro post request karni hai hume aur humme na zada kuch nai chahiye bas todo aur completed chhaiye 
// // completed and todo nikal lia through destructuring and then we generated a unique id using uuid()
// //  and then res.send kiya id, todo aur completed ko
// //ab jab mai thuder client par get request karunga toh mujhe yeh upar wala milega 
// // aur jab post request karunga toh mujhe ye milega 
// app.post("/todos",(req,res)=>{
//     const{todo,completed} = req.body; // destructuring
//     const id = uuid(); // generate unique id
//    todos.push({id,todo,completed}); // send back the id, todo and completed status
//    res.json(todos);
// });

// //  [
// //   {
// //     "id": "d483e998-211f-4717-9f2b-ca3f0ea0facf",
// //     "todo": "Do something nice for someone you care about",
// //     "completed": false,
// //     "userId": 152
// //   },
// //   {
// //     "id": "d844cca8-7741-4e2a-8c0d-01fc8fbe6e59",
// //     "todo": "Memorize a poem",
// //     "completed": true,
// //     "userId": 13
// //   },
// //   {
// //     "id": "b65ffbca-6abb-458c-99e1-2e8a1f33673e",
// //     "todo": "Watch a classic movie",
// //     "completed": true,
// //     "userId": 68
// //   },
// //   {
// //     "id": "e034bab8-c331-45ed-b443-bb5f0e7bc628",
// //     "todo": "Watch a non-classic movie",
// //     "completed": false
// //   }
// // ]
  


// // delete request 
// // { id = "dsfjlksdjfk=sdfljsdl=sdlfk"} we are deleting on the basis of id 
// app.post("/todos/delete", (req, res) => {
//   const id = req.body.id;
//   const todoIndex = todos.findIndex(todo => todo.id == id);
//   if(todoIndex != -1){
//     todos.splice(todoIndex, 1);
//   }

//   res.json(todos);
// })

// //update request
// // app.post("/todos/update/:id", (req, res) => {
// //   const { todo, completed } = req.body
// //   const id = req.params.id;
// //   const todoObj = todos.find(todo => todo.id == id);
  
// //   if(todoObj) {
// //     todoObj.todo = todo;
// //     todoObj.completed = completed;
// //   }

// //   res.json(todos);
// // })
// // basically phele same todo aur completed nikal li kyuki hume update yehi dono karne the 
// // fir hum params sai id nikal li usse humne match karva lia witht he id we had 




// //what does middleware do?
// // middleware is a function that has access to request and response objects basically req hoti hai response hoti hai undono ke beech mai middleware hota hai tpo use that we do app.use
// // and that middleware is provided by express only named express.json()
// // we will also make middle ware of our own later
// // and yeh hum abhi app.use sai banate hai



// // [
// //   {
// //     "id": 1,
// //     "todo": "Do something nice for someone you care about",
// //     "completed": false,
// //     "userId": 152
// //   },
// //   {
// //     "id": 2,
// //     "todo": "Memorize a poem",
// //     "completed": true,
// //     "userId": 13
// //   },
// //   {
// //     "id": 3,
// //     "todo": "Watch a classic movie",
// //     "completed": true,
// //     "userId": 68
// //   },
// //   {
// //     "id": 4,
// //     "todo": "Watch a non-classic movie",
// //     "completed": false,
// //     "userId": 68
// //   }
// // output after post request
// //ek aur baar add kardunga toh ek aur baar 4 add ho jayega


// // now lets make a basic todo application backend 
// // ab kya hota hai na hum kabhi bhi id ko frontent sai nai utha te hum humse backend sai utha te hai
// // toh hum id ko bhi backend sai utha lenge
// // ab ek option hai ki mai let id = 1 par set kardunga aur jaha jaha mai request bhej raha hu wala id++ kardu par ismai yeh problem hai ki kahi par galti sai hum 2 jaaga par same id mil gai au humne delete request bheji toh dono delete ho jayegi 
// // so resolve this issue we have a package called uuid
// // yeh kya karta hai humesha same size ki hamesha unique id geenrate karke dega 
// // package hai and to install it we npm i uuid and then require karu use karo 






// // npx sai kya hota hai node package exe basically executable file hai bhai
// // nodemon ko install karni ki zarurat nai hai cuz npx is a executable file 
 
