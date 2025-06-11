// ways to write async code in sync function
// 1. call back
// 2. promises
// 3. async await

// this is callback method 
// function getfood() {
//     setTimeout(() => {
//         console.log("food has arrived")
//     }, 3000);
// }

// function getdrinks() {
//     setTimeout(() => {
//         console.log("drink have arrived")
//     }, 2000);
// }
// function getsweet() {
//     setTimeout(() => {
//         console.log("sweets have arrived")
//     }, 1000);
// }

// look sabse phele toh output ke hisab sai concept ke hisab sai sweet ayega then drink then food but i want ki mai async task ko sync mai badal duu
// now i want the output as food,drinks and then sweets 


function getfood(cb) {
    setTimeout(() => {
        console.log("food has arrived")
        cb();
    }, 3000);
}

function getdrinks(cb) {
    setTimeout(() => {
        console.log("drink have arrived")
        cb();
    }, 2000);
}
function getsweet() {
    setTimeout(() => {
        console.log("sweets have arrived")
    }, 1000);
}


getfood(function(){
    getdrinks(function(){
        getsweet()
    })
})


// getfood(()=>{
//     getdrinks(()=>{
//         getsweet()
//     })
// })
// the above thing is called the following 
// call back hell or call back doom (because ek kai baad ek ke baad call karte hai so aisa kuch ban jata hai>)








