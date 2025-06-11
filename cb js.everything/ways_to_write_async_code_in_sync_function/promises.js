// promise has 3 states:
// 1. fulfill
// 2. reject
// 3. pending


const p = new Promise((resolve,reject)=> {
    const randomnumber  = Math.floor(Math.random()*10);


    setTimeout(() => {
        if(randomnumber>5) {
            resolve(randomnumber);
        }else{
            reject(randomnumber);
        }
    }, 3000);
});
// 1 to 12 number line tak we have made a promise (in the real world we dont need to do this we just have to consume promise)


// consuming promise


p
  .then(num => console.log("Hello from then", num))
  .catch(num => console.log("Hello from catch", num))
// we can also write it like this 

// p.then((num) => {
//   console.log("Hello from then", num);
// }).catch((num) => {
//   console.log("Hello from catch", num);
// })



// then ki mapping resolve sai hai 
// catch ki mapping reject sai hai 
