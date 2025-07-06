const input = document.querySelector(".input");
const btn = document.querySelector(".button");
const newtask = document.querySelector(".tasklist")


btn.addEventListener('click',(e)=>{
    // console.log(input.value);

    const newitem = document.createElement('div');
    newitem.setAttribute('class','item');

    let str=`
              <div class="section-left">
            <input class="checkbox" type="checkbox">
            <li>${input.value}</li>
      
          </div>




          <div class="section-right">
            <span class="up-arrow"> ⬆️ </span>
            <span class="bin"> 🗑️ </span>
            <span class="down-arrow"> ⬇️ </span>


          </div>`

       newitem.innerHTML=str;


       input.value="";


       newtask.append(newitem);
})

newtask.addEventListener("click",(e)=>{
    const element = e.target.getAttribute('class');
    // console.log(element);

    if(element === 'bin') {
      const item=e.target.parentElement.parentElement;
      item.remove();
    //   console.log(item);
      
    }
    else if(element === 'up-arrow') {
        const curritem = e.target.parentElement.parentElement;
        // console.log(curritem);
        const previtem = curritem.previousElementSibling;
        // console.log(previtem);
        previtem.before(curritem);
    }
    else if(element === 'down-arrow') {
        const curritem2 = e.target.parentElement.parentElement;
        // console.log(curritem2);
        const nextitem = curritem2.nextElementSibling;
        nextitem.after(curritem2);
    }
    else if(element === 'checkbox') {
        // console.log(e.target);
        const nextitem2 =  e.target.nextElementSibling;
        // console.log(nextitem2);
        nextitem2.classList.toggle('checkbox');
    }
})
// console.log(checkbox);

// jaise hi mai checkbox par click karta hu toh meri checkboz class add ho jati h inside li and jaise hi uncheck kar ta hu toh remove ho jati hai class checkbx because of toggle