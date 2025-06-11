// js is a synchronous language 
// how will we make it asyschronous 
// js is a synchronous single threaded language 




// console.log(1);

// setTimeout(()=>{
//   console.log(2);
// }, 5000)


// setTimeout(() => {
//   console.log(3);
//   console.log(4);
// }, 2000)

// console.log(5);

// =================== 

// setTimeout(() => {
//   console.log(0)
// }, 0)

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 2000);

// console.log(3);

// setTimeout(() => {
//   console.log(4);
// }, 5000);

// console.log(5);

// setTimeout(() => {
//   console.log(6)
// }, 3000);

// const intervalId = setInterval(() => {
//     console.log("hi there!")
//   }, 1000);
  
//   setTimeout(() => {
//     clearInterval(intervalId);
//   }, 5000);
// ..................................new thing........................


//   new Date().getTime() try searching it this is the time in milliseconds from 1 jan 1970 till now
// normal delay but call stack is handeling all the delay fucntion not the window or web api 
// delay(2);
// console.log("helloooo");
// function delay() {
//     let time = new Date().getTime();
//     while(time+5000 > new Date().getTime()) {

//     }
// }



// set time out fucntion 
// basically browser ke paas na kuch super powers hoti hai forex fetch,timer fucntion(set time out and set interval and many more)
// ab browser keheta hai ki bhai agar aap ko yeh access karni hai toh mai js engine ko ek object de raha hu which is called window 
// ab yeh window object mai bhot sare powers hai when u will  write window on console u will see all the super powers
// now yeh joh super powers hai usko hum kehete hai web api
// now basically the problem was arising was ki js engine single threaded hota hai toh jab mai koi delay daalne ki koshish karta hu say mere ko hello ke baad 5 sec baad world print karvana hai ab mai yeh toh karlunga easily but kya ho raha hai na single threaded ya single call stack ki vaje sai mai uss 5 sec ke beech mai na i am not able to perfor any tasks cuz single call stack hai humare paas 
// aur ab mai yeh chhata hu ki maine ek fucntion banaya usmai console.log hello karvay toh voh hello joh hai voh 5 sec ke baad print ho toh voh joh console.log hai na voh web api ya window sambhal lega basically joh single call stack tha voh free rahega baki task perform karega and delay wali cheez window ya web api sambhal lega simply  



// web api is handling all the delay thing hence the single call stack in js is free and we excute other task tooo

// setTimeout(()=>{
//     console.log("hello bhai");
// },5000);




// ...............................new thing....................





// now we have 3 things call stack(thread of execution) , web api and call baxk queue, event loop
console.log("wakeup");

setTimeout(() => {
    console.log("ordered fooddddd");    
}, 3000);

console.log("watching moviessssss")

setTimeout(() => {
    console.log("ordered drinkss")
}, 2000);

console.log("take a bath");
console.log("dancinggg");


// now the output will be wakeup,watching moviessssss,take a bath,dancing,ordered drinks and at last ordered fooddddd 
// now lets understand how it works based on the 4 things i wrote above 

// wake up ayega in call stack 
// immediately it will get executed and output will be wake up 


// now set time out ayega in call stack pura fiucntion ab js will see that is it is a web api function toh voh seedhe web api mai bhej dega pure fucntion ko (note it is not executed yet);

// now watching movies will come in the call stack and execute ho jayega simply 

// again set time out fucntion jayega in web api 
// then take a bath will come in the call stack 
// then dacing will come in the call stack and both will be executed so far the output is wake up , wathcing movies,take bath and dancing 

// now apne web api mai 2 cheeze padhi thi ordered fooddddd and ordered dricnk dono ke timer ke sath ab ordered drinks jaldi finish  hoga cuz of 2 sec and then queue mai chale jayega and then 3 sec wala bhi aah jayega in the queue that is ordered fooddddd 

// ab ek 4th cheez hoti hai event loop what it does is it will check and monitor if the call stack is empty or not jaise hi empty hua toh voh ordered drink ko utha ka call stack mai bhej dega aur ordered drinks will be executed same fir check karega call stack empty hai aur fir voh food ko leke ayega aur fir bas simple execute ho jayega 



// ....................new thing..............

// set interval 



// so yeh kya karega ki har 2 sec baad yeh hello there print karega which we can stop 
// setInterval(()=>{
//     console.log("hello there !")
// },2000);



// now if we wanna stop it we have to give it a id thats how 

const id = setInterval(()=>{
    clearInterval(id);
},8000);
// use clear interval to stop it and pass id in it and this 8000 means ki 8 sec baad stop ho jaye..


// shift option down arrow key to replicate








 