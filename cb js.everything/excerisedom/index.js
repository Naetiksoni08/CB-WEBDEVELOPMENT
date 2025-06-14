const div  = document.querySelectorAll('.box');



for(let box of div) {
box.addEventListener("click",(e)=>{
    e.target.remove();
})
}
