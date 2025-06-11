// it is used to achieve inheritance

// function Car(color,type) {
//     this.color = color;
//     this.type= type;

// }
// const car1 = new car("white", "sedan");
// console.log(car1);


function Student(name,age,marks) {
    this.name = name;
    this.age = age;
    this.marks = marks;
}
Student.prototype.getpercentage = function() {
    return (this.marks.chemistry+this.marks.physics+this.marks.maths)/3;

}
const naetik = new Student("naetik",20,{chemistry:90, physics:80,maths:49});
console.log(naetik);


const naetik2 = new Student("naetik2",25,{chemistry:70, physics:90,maths:55});
console.log(naetik2);
co

// basically what is happening ek fucntion banega jab here student toh kya hoga har fucntion ka ek prototype banega what is prototype prototype is object ab fucntion joh hai student voh proptype ko access kar sakta hai by student.prototype ab prototype ke paas bhi ek key hogi ki voh constructor that is student fucntion ko access kar skata hai ab jab iss function ke instance banenge naetik and naetik 2 name sai toh kya hoga get percentage joh hai voh protopye mai ban jayega like we wont be able to see it in the naetk and naetik2 instance but we can see it in the prototype 

// jab humne student mai getpercentage banaya tha tab we had to call the getpercentage fucntion bar bar matlb naetikk ke liye ek bar call karunga (cuz it is a new object ) fir naetik 2 ke liye so basically protopye ke help sai space ya memory bach rhai hai 

// ab ek cheez htoi hai dunder proto we use it as __proto__ isse kya hota hai jab humne naetik and naetik 2 ka instance bana hoga toh uske pass get percentage kese aaya hoga.... instances ke paas bhi reference hota hai ofg prototype with the help of dunder proto 


// Array,Function,String,Object,Number,Boolean all these are constructor function 

// with the help prototype we are saving memory and it is also used for inheritance 


// we can override a prototype ke andar funciton for example Array ek constructor fucntion tha uab uska bhi ek prototype hoga uske andar mere sare concat , pop, push sare fucntion honge ab tu uske pop fucntion ka khudh ka pop function bana sakte hai 




const arr = [1,2,3,4,5];
arr.push(500);


Array.prototype.pop = function() {
    console.log("not allowed to pop!!!!")
}

arr.pop();


console.log(arr);

// ab dekh pop function joh hai will allow us to remove 500 from the array but here we cant do because i have made my pop fucniton ab jab isko chaleyega toh u will get the output as not allowed to pop cuz it is my user defined fucntion overrirde kardia protopye ke andar ka pop function ko 

// browser par ek property hoti hai hasownproperty voh yeh check karta hai ki ek particular varibale ya fir koi function uski property hai ya nai like str.hasownproperty("a") this means a hai str mai 


// Object.prototype.__proto__ //nulll
// Array.prototype.__protp__ === Object.prototype  trueeeee
// String.prototype.__protp__ === Object.prototype  trueeeee
// Function.prototype.__protp__ === Object.prototype  trueeeee
// Boolean.prototype.__protp__ === Object.prototype  trueeeee






