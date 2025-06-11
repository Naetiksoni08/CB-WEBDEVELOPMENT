var num1 = 20;
var num2 = num1;

num2 = 30;


console.log(num1);
console.log(num2);

// output will be 20 30
// primitive mai hamesha value copy hota hai mtlb ek copy banega num2 mai

var obj1 = {
    num: 20,
    
}
var obj2 = obj1;
var obj3 = {...obj1}; 
// this is called shallow copy mtlb copy ban jatti hai spread operator use kia hai humne

obj2.num = 30;

console.log(obj1);
console.log(obj2);
console.log(obj3);


// output will be 30 30

// this is because of reference type


