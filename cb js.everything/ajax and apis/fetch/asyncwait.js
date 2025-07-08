const baseURL = "https://jsonplaceholder.typicode.com/Users"

const btn = document.querySelector('button');
const user = document.querySelector('.user-name'); 
const emailhai = document.querySelector('.email-id');



async function getdata(baseURL) {
try {

    const res= await fetch(baseURL);
    const data= await res.json();
    console.log(data);
    return data;
 } catch (error) {
    console.log(error);
}
}

   function addtolist(userdata) {
    user.innerText = '';
    emailhai.innerText ='';

   userdata.forEach(person => {
    const li = document.createElement('li');
    const li1 = document.createElement('li');
    li.innerText = person.username;
    li1.innerText = person.email;
    user.append(li); 
    emailhai.append(li1);
   });
}

async function handle() {
    const data = await getdata(baseURL);
    const userdata = data.map(obj => {
        return {
            username: obj.username,
            email: obj.email
        };
    });
    addtolist(userdata);
  
}

   
    
   


btn.addEventListener('click',handle)
    