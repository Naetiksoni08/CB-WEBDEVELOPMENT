// console.log("connected");
 const socket = io();
 const btn = document.querySelector("button");


 btn.addEventListener("click",()=>{ 
    socket.emit("message:new","hi from client");  // client gives message 
    // Yaha client emit kar raha hai aur server listen kar raha hai.
 })
 

 socket.on("message:new",(data)=>{
    console.log(data); // client gives message 
 })


 