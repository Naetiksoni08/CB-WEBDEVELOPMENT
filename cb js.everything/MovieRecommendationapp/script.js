
const imagelist = document.querySelector('#list');
const form = document.querySelector("form");
const input = document.querySelector('#ip');


form.addEventListener('submit',(e)=>{
     e.preventDefault();
    const inputtext = input.value;
     input.value='';

     getmovies(inputtext);
})

function getmovies(inputtext) {
    const baseURL = `https://api.tvmaze.com/search/shows?q=${inputtext}`;


    axios.get(baseURL)
    .then((respone)=>{
   const data = respone.data;
   imagelist.innerText='';
   data.forEach(obj => {
    console.log(obj.show.image.medium);
    const image = document.createElement('img');
    image.setAttribute('src', obj.show.image.medium);
    image.style.margin = '10px';
    imagelist.append(image);
   });
 })

    .catch((err)=>console.log(err));

}