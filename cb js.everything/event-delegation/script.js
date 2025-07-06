// const childs = document.querySelectorAll(".child");
// const parent = document.querySelector('.parent');

// for(let child of childs) {
//     child.addEventListener('click',(e)=>{
//         console.log(e.target.innerText);
//     })


// }


// ..............now if i dynamically add a new child then this event listner property wont work on child 13

// so in order to solve it we say rather than applying the event listner on child apply it on parent so parent.addeventlistner
const childs = document.querySelectorAll(".child");
const parent = document.querySelector('.parent');

// for(let child of childs) {
    parent.addEventListener('click',(e)=>{
        console.log(e.target.innerText);
    })

// }

let newchild = document.createElement('div');
    newchild.setAttribute('class','child');


    newchild.innerText="child-13";

    parent.append(newchild);