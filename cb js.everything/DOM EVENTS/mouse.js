// basically we have 2 ways to add event in our website 
// now what is event event is like scroll , click, doubleclick , drag 
// now we can add the event by two ways 
// inline event and seperate event
// inline event mai hum simply ek function banayenge in a seperate file and then we will call that fucntion in the button function 


const btn = document.querySelector('button');
const ul = document.querySelector('ul');


let num = 1;

// btn.addEventListener("click", ()=>(console.log("hello")));

btn.addEventListener("click",()=>{
    const li = document.createElement("li");
    li.innerText = num;
    ul.append(li);
    num++;
})
// try mouse eventsss



