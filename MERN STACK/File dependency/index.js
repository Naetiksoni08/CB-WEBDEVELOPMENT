// const lib1 = require('./lib1');
// const lib2 = require('./lib2');


// console.log('Inside Index');




// new thing(updation in code)=========


// const lib1 = require('./lib1');
// const lib2 = require('./lib2');


// console.log('Inside Index');
// console.log(lib1.one);
// console.log(lib2.Two);
// console.log(lib1);
// console.log(lib2);




// now to remove the warning of circular dependency see the file lib1 and lib2



const lib1 = require('./lib1');
const lib2 = require('./lib2');


console.log('Inside Index');
console.log(lib1.one);
console.log(lib2.Two);
console.log(lib1);
console.log(lib2);



