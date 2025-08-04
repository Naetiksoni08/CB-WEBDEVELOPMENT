// const fs = require("fs");
// const path = require("path");

// // const filePath1 = path.join(__dirname, "data", "input1.txt");
// // const filePath2 = path.join(__dirname, "data", "input2.txt");
// // const outputFilePath = path.join(__dirname, "data", "output.txt");



// function readFile(filename) {
//   const filepath = path.join(__dirname,"data",filename);
//   return new Promise((resolve, reject) => {
//     fs.readFile(filepath,"utf-8",(err,data)=>{
//     if(err) reject(err);
//     resolve(data);
//   })
// })
// }

// function writefile(filename,data) {
//   const filepath = path.join(__dirname,"data",filename);

//   return new Promise((resolve, reject) => {
//     fs.writeFile(filepath,data,(err)=>{
//       if(err) reject(err);
//       resolve(data);
//     })
//   })
// }


// async function main() {
//  try {
//   const filedata1 =  await readFile("input.txt");
//   const filedata2 =  await readFile("input2.txt");

//   const arr1 = filedata1.split('\r\n');
//   const arr2 = filedata2.split('\r\n');

//   let arr = [...arr1,...arr2];
//   arr.sort((a,b) => a-b);

//   const finaldata = arr.join("\r\n");
//   await writefile("output.txt",finaldata);
//   console.log("successfully added the data");
  
//  } catch (err) {
//   if(err) {
//     console.log("something went wrong");
//     return;
//   }
//  }
// }
// main();


const fs = require("fs");
const path = require("path");


function readFile(filename) {
  const filepath = path.join(__dirname,"data",filename);
  return new Promise((resolve, reject) => {
    fs.readFile(filepath,"utf-8",(err,data)=>{
      if(err) reject(err);
      resolve(data);
    })
  })
}

function writeFile(filename,data) {
   const filepath = path.join(__dirname,"data",filename);
   return new Promise((resolve, reject) => {
    fs.writeFile(filepath,data,(err)=>{
    if(err) reject(err);
    resolve();
   })
  })
  }

 async function main() {
 try {
  const filedata1 =  await readFile("input.txt");
  const filedata2 =  await readFile("input2.txt");

  const arr1 = filedata1.split('\n');
  const arr2 = filedata2.split('\n');

  let arr = [...arr1,...arr2];
  arr.sort((a,b) => a-b);

  const finaldata = arr.join('\n');
  await writeFile("output.txt",finaldata);
  console.log("successfully added the data");
  
 } catch (error) {
   if(error) {
    console.log("something went wrong");
    return;
  }
}
 }
main();
