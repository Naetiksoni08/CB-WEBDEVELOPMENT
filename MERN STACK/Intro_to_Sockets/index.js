const express = require("express");
const { createServer } = require("http");
const { Server: socketServer } = require('socket.io');// renamed server as socketServer

const app = express();
const server = createServer(app);
const io = new socketServer(server); // this ceate server needs the node server we have made just above this line app wala server nai chahiye

app.use(express.static("public")); 

io.on('connection', (socket) => {
    console.log("user Connected", socket.id);

socket.on("message:new",(data)=>{ // here server is listening
    console.log(data);
    socket.emit("message:new","hello there !!"); // server is messaging
    //Yaha server emit kar raha hai aur client listen kar raha hai.
})
})
// app.get("/", (req, res) => {
//     res.send("server working fine !!")
// })



server.listen(5001, () => {
    console.log('server is working fine on port', 5001);
})


// Client emit karega → Server on sunega.
// Server emit karega → Client on sunega.
// Matlab dono ek tarah se greeting exchange kar rahe hain:
// Client: "hi from client"
// Server sun ke reply deta: "hello there !!"
// Client sun ke reply print karega.