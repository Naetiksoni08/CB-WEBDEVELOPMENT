
const input = document.querySelector('#input');
const buttons = document.querySelectorAll('button');


for(let button of buttons) {
    button.addEventListener('click',(e)=> {
    let buttontext = e.target.innerText;

     if(buttontext==='C') {
         input.value="";
     }
     else if(buttontext === '=') {
        try {
            input.value = eval(input.value);
            
        } catch (error) {
            input.value = "Invalid Operation!!"
            
        }
     
     }
     else if(buttontext==='x') {
        input.value+='*';
     }
     else{
         input.value += buttontext;
     }
    
    })



}

