// it is a third party api 

const baseURL = "https://jsonplaceholder.typicode.com/Users"

const btn = document.querySelector('button');
const user = document.querySelector('.user-name'); 
const emailhai = document.querySelector('.email-id');




function getdata(baseURL){
    return new Promise((resolve, reject) => {
    axios.get(baseURL)
    .then((res)=>{
         console.log(res.data);
         resolve(res.data);
    })
    .catch((err)=>reject(err));
})
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
   

function handler() {
getdata(baseURL)
    .then((data)=>{
        const userdata = data.map(obj=>{
           return{
            username: obj.username,
            email: obj.email
           }
        })
        console.log(userdata);
        addtolist(userdata);
    })
    .catch((err)=>console.log(err));
}

btn.addEventListener('click',handler);


