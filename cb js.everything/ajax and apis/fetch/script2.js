const baseURL = "https://jsonplaceholder.typicode.com"
const btn = document.querySelector('button');
const user = document.querySelector('.user-name'); 
const emailhai = document.querySelector('.email-id');



function getdata(baseURL) {
 return new Promise((resolve, reject) => {
    fetch(`${baseURL}/Users`) // data fetch kia
    .then((res)=>{ //  ek respose mila hoga
     return res.json(); // usko json mai convert kar lia
    })
    .then((data)=>{
        resolve(data); // if data aah gaya toh usse resolve mai pass kardo 
    })
    .catch((err)=>{
        reject(err); // if data nahi aaya toh usse reject kardo aur error throw kardo 
    })
 })
}

function addtolist(userdata) {
    user.innerText = '';
    emailhai.innerText= '';
   userdata.forEach(person => {
    const li = document.createElement('li');
    const li1 = document.createElement('li');
    li.innerText= person.username;
    li1.innerText = person.email;
    user.append(li);
    emailhai.append(li1);
   });

}


function handle() {
    getdata(baseURL)
    .then((data)=>{
        const userdata = data.map((obj)=>{
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



btn.addEventListener('click',handle)
