const fs = require('fs');
// console.log(fs); fs is a module inside it we have read write append modes
const path = require('path');


// const data = "\nhello im naetik and im a coder , i love to code ";
// const data = "A new system update is available,\ndownload it to enjoy new features and make ur pc secure, \n and upto date";

// do baar isliye aah raha hai kyuki ek baar phele bhi append kar chuka hu 

const data = "\nhey i have opened a file in append mode";

const filepath = path.join(__dirname,"data.txt");
// console.log(filepath);
// /Users/naetiksoni/Desktop/webdevelopment/MERN STACK/filesystem/data.txt

// async
// fs.writeFile(filepath,data,(err)=> {
//     if(err) {
//         console.log("something went wrong");
//         return;
//     }
//     console.log('Data Written Successfully!!!');
// })


// now the data is stored permanently

// //reading a file
// fs.readFile(filepath,"utf-8",(err,data) => {
//     if(err) {
//         console.log("something went wrong");
//         return;

//     }
//     console.log(data);
// })

// append file
fs.appendFile(filepath,data,(err)=>{
    if(err) {
        console.log("something went wrong");
        return;
    }
    console.log("data added successfully");
})

// readfilesync 
// writefilesync
// we dont use these both cuz it is synchronous
// promise hw 

// if the file doesnt exist then node index.js run karke it will create a file and uske andar data joh humne dala hai voh aah jayega
