// all this is called event bubbling (refer to register too);


const grandparent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
// console.log(grandparent,parent,child);

// 1.......................

// grandparent.addEventListener('click',()=>{
//     console.log("grandparent div triggered");
// },false);


// parent.addEventListener('click',()=>{
//     console.log("parent div triggered");
// },false);


// child.addEventListener('click',()=>{
//     console.log("child div triggered");
// },false);
// by default false hoti hai value 




// output.............
// child div triggered 
//  parent div triggered 
//  grandparent div triggered 



// 2......................


// grandparent.addEventListener('click',()=>{
//     console.log("grandparent div triggered");
// },true);


// parent.addEventListener('click',()=>{
//     console.log("parent div triggered");
// },true);


// child.addEventListener('click',()=>{
//     console.log("child div triggered");
// },true);


// output................
//  grandparent div triggered 
//  parent div triggered
//  child div triggered 


// 3............................


// grandparent.addEventListener('click',()=>{
//     console.log("grandparent div triggered");
// },true);


// parent.addEventListener('click',()=>{
//     console.log("parent div triggered");
// },false);


// child.addEventListener('click',()=>{
//     console.log("child div triggered");
// },true);



// output....................
// grandparent div triggered
//  child div triggered 
//  parent div triggered 



// so capturing value  = true =  event-traversal the ouput u can see from above
// so capturing value  = false =  event-propogation the ouput u can see from above





// 4.................
// now the last thing is if i want ki mai child par click karu toh sirf aur sirf child ka hi event trigger ho toh i have something for you brooo





grandparent.addEventListener('click',(e)=>{
    console.log("grandparent div triggered");
},false);


parent.addEventListener('click',(e)=>{
    console.log("parent div triggered");
},false);

 child.addEventListener('click',(e)=>{
     console.log("child div triggered");
     e.stopPropagation();

 },false);

//  if sirf mai child par click karta hu toh now the output is only
//  child div triggered 



