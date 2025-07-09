// const lib2 = require('./lib2');

// console.log("Inside lib1");

// function one() {
//     console.log('Running function one');
// }

// module.exports ={
//     one
// }




// // new thing (updation in the code)========


// const lib2 = require('./lib2');

// console.log("Inside lib1");

// function one() {
//     console.log('Running function one');
// }

// module.exports ={
//     one,
//     lib2
// }


// now to remove the circular dependency warning we we will do this

const lib2 = require('./lib2');

console.log("Inside lib1");

function one() {
    console.log('Running function one');
}

module.exports.one = one;
module.exports.lib2= lib2;
  
