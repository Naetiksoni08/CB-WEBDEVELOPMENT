item = {
    noofitem: 0, 
    incrementnofofitem:function() {
     this.noofitem++;
     console.log(this)
    }
}


const btn = document.querySelector('button');

btn.addEventListener('click',item.incrementnofofitem.bind(item));
btn.addEventListener('click',()=>{
console.log(item.noofitem);
})