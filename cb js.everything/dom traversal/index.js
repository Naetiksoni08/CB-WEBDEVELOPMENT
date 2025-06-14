// so basically we are studying dom traversal 
// ek normal sa html we wrote then we performed some property 
// ul . parent sai mujhe div milega 
// ul.children sia mujhe li milenge 
// ul.previouselement sai we will get h2
// ul.next element karega p ayega 

const ul = document.querySelector("ul");

console.log(ul.parentElement);
console.log(ul.children);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);


// if you wanna add a tag or a text dynamically then we have some properties 
// createelement();
// append();
// remove();
// before();
// after();

const h1 = document.createElement('h1');

h1.innerText = "learning DOM";

console.log(h1);

const div = document.querySelector("div");
div.append();

const li = document.querySelector("li");
li.innerText="four";
li.style.color = "red";

ul.append(li);
ul.remove();


// before and after bhi hote hai 
// before sai forex tu ul sai just phele kuch add karna chhata hai toh use before
// after sai forex tu ul ke just baad kuch add karna chhata hai toh use after


// before
const p = document.createElement('p');
p.innerText = "hello from p";

ul.before(p);
// after
ul.after(p);






