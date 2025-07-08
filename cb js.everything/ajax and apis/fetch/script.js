const baseURL = "https://jsonplaceholder.typicode.com/todos/1"

const btn = document.querySelector('button');
const username = document.querySelector('.user-name'); 
const email = document.querySelector('.email-id');

btn.addEventListener('click',()=>{
    username.innerText="";
   fetch(`${baseURL}/Users`)
   .then((Response)=>{
    // console.log(Response);
    return Response.json();
   })
   .then((data)=>{
    // console.log(data);
    data.forEach(obj => {
        // console.log(obj.username);
        // console.log(obj.email);
        // console.log(obj.address);
        const li = document.createElement('li');
        const li2 = document.createElement('li');
        li.innerText = obj.username;
        li2.innerText = obj.email;
        username.append(li);
        email.append(li2);

    });
   })
   .catch((err)=>{
    console.log(err);
   })
  
})
