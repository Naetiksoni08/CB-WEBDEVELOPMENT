// const lib1 = require('./lib1');

// console.log("Inside lib2");

// function Two() {
//     console.log('Running function two');
// }

// module.exports ={
//     Two
// }



// // new thing (updation in the code)========


// const lib1 = require('./lib1');

// console.log("Inside lib2");

// function Two() {
//     console.log('Running function two');
// }

// module.exports ={
//     Two,
//     lib1
// }



// now to remove the circular dependency warning we we will do this

const lib1 = require('./lib1');

console.log("Inside lib2");

function Two() {
    console.log('Running function two');
}

module.exports.Two = Two;
module.exports.lib1 = lib1;
  


