// spread

const num1= [1,2,4,5,6,7]

const num2 = [3,4,5,6];

const nums = [...num1,...num2];

console.log(nums);

const marker1 = {
    color: "green",
    height :"xyz",
    shape: "square"


}

const marker2 = {
    color: "yellow",
    height :"xyd",
    shape: "circle"

}


const marker3 = {...marker2};
console.log(marker3);


// rest and spread syntax is same 


// function add(a,b,...rest){ 
//     return a+b;

//     // a=5
//     // b = 5
//     // rest ke andar baki number aah jayenge as array 
// }
// console.log(add(5,5,10,20,30));

function add(a, b, ...rest){

    const c = rest.reduce((acc, num) =>  {
      return acc + num
    }, 0)
    return a+b+c;
  }


  console.log(add(5, 5, 10, 20, 40, 10))




//  object destructuring

// const height = marker1.height;
// const shape = marker1.shape;

const { height, shape, color } = marker1;
const { height2, shape2, color2 } = marker2;
console.log(height, shape, color);


// array destructuring

const [a, b, c, d] = num1;
// const fullName = ["Rahul", "Yadav"];
const [firstName, lastName] = ["Rahul", "Yadav"];

console.log(a, b, c, d);
console.log(firstName, lastName)


// shift option down arrow key to replicate
