const fs = require('fs');
const path = require('path');

const filepath1 = path.join(__dirname,"data","input1.txt");
// console.log(filepath1);
const filepath2 = path.join(__dirname,"data","input2.txt");
// console.log(filepath2);
const outputFilePath = path.join(__dirname,"data","output.txt");
// console.log(outputFilePath);

fs.readFile(filepath1,"utf-8",(err,data1)=>{
  const arr1 = data1.split('\n');
  // console.log(arr1);


  fs.readFile(filepath2,"utf-8",(err,data2)=>{
    const arr2 = data2.split('\n');
    // console.log(arr2);

    const arr = [...arr1,...arr2];//spread operator
   arr.sort((a,b)=> a-b);
    // console.log(arr);


    const finalData = arr.join('\n');
        fs.writeFile(outputFilePath, finalData, (err) => {
          if(err){
            console.log(err);
            return;
          }
    
          console.log("THE END!!")
        })
  })

})