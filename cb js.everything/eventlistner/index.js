const username = document.getElementsByName("username")[0];
const password = document.getElementsByName("password")[0];
const form = document.querySelector("form");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(username.value);
    console.log(password.value);
    username.value = "";
    password.value = "";
        
})
