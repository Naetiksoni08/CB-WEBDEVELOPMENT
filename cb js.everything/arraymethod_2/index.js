// high order methods

//foreach,map,filter,reduce,find,findindex

const nums = [1,2,3,4,5];

nums.forEach((num,index)=> {
    // console.log(num);
    console.log(index);

});
// for each is a internal function (3 requiremenet hote hai num,index and array third one is not that important)






// i have a set of products and i want only those products which have a price less than 30 so simply ek array banaunga and then for loop laga ke check karlumga aur fir push kardunga and end mai print karlunga....




const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      category: "Electronics",
      price: 99.99,
    },
    {
      id: 2,
      name: "Organic Green Tea",
      category: "Food & Beverage",
      price: 12.49,
    },
    {
      id: 3,
      name: "Stainless Steel Water Bottle",
      category: "Home & Kitchen",
      price: 24.99,
    },
    { id: 4, name: "Leather Wallet", category: "Accessories", price: 39.99 },
    {
      id: 5,
      name: "Fitness Tracker Watch",
      category: "Wearables",
      price: 129.99,
    },
    {
      id: 6,
      name: "Electric Toothbrush",
      category: "Personal Care",
      price: 45.5,
    },
    { id: 7, name: "Yoga Mat", category: "Sports & Outdoors", price: 22.99 },
    { id: 8, name: "Smartphone Stand", category: "Electronics", price: 15.99 },
    { id: 9, name: "Novel: The Silent Patient", category: "Books", price: 14.99 },
    {
      id: 10,
      name: "Ceramic Coffee Mug",
      category: "Home & Kitchen",
      price: 9.99,
    },
  ];




// .........filter(it will return something )

// call back is arrow function
// filter will return you something in the array(mtlb array mai fill karke deta hai)


const filterproducts =products.filter(product => {
 if(product.category=="Electronics") return true;
 else return false
 })

 console.log(filterproducts);




// short form 
const filterproduct = products.filter(product => product.price<20);
console.log(filterproduct)






// ...........map

const newproducts=[];

for(let product of products) {
    // product.id = product.id*10;
    // newproducts.push(product);
    newproducts.push({...product,id: product.id*10})
    // what will happen ki product ki shallow copy banegi and then product.id karke humne into 10 kardia toh simply newproduct ki id will become 10 20 30... and so and then product mai id will be 1 2 3 4 5 6 ....

}

console.log(newproducts);
console.log(products);



// mapppsss


// const Newproduct = products.map((products)=>) {
//     return (...product ,id: products.id * 10);
//      return product.name;
// }

// ---------------reduce 

const arr = [1,2,3,4,5];

const sums = arr.reduce((acc,num) => {
    return acc += num;

},10);
// 10 is the value of sum that is we are just intiatlizing the value of sum as 10 so 10+1 = 11 then 11+2 = 11+3....

//acc is accumulator ,nums,index, array (reduce array ko sums mai reduce kar raha hai basically)
// mapping mai basically agar 10 elements hai toh 10 ke 10 elements map ho jayenge 
// filter basically ek condition ke basis filterout kar rahe hai toh agar 10 products hai toh 5 product filter out ho jayenge on the basis of the the condition pass say if(prudct.category == "electronics" so bas electronics wale product ayenge)



// there are some other functions tooo 
// find , some , every and sort 



// ...............................find

// basically find karega if koi cheez exist karti hai on the basis of the condtion u will pass 

let arr3 = [1,2,3,4,5,6,7,8,9,10];

let num = arr.find((val)=>{
  return val>4;
})
// if koi val 4 sai badi hai toh toh output 5 ayega 

// if i say 
let num2 = arr.find((val)=> {
  return val===8;
})
// output will be 8 only 
// but if i check val===11 then output will be undefined 


// ................................some
// it return true or false ki kya koi bhi value ek given condition ke according true ya false hai 1 bhi hogi toh true ayega babu

let arr4 = [2,3,4,5,6,7,8];

let num5 = arr4.some((val)=> {
    //  return val%2==0;
    return val>8;
    // false ayega
})



// ...................................every 

// it checks kya har element ek given condition ke according true ya false hai 
// it returns in true or false only 


let arrr = [1,2,3,4,5,6,7,8,9,10];

let num6 = arrr.every((val)=> {
  // return val%2===0;
  return val>4;
})

 
//  the output will be false cuz har element nai hai even in the arr
// kya har element 4 sai bada hai nooo so output will be false;



// .....................................sort


// if i say a-b toh it will sort in ascending order 
// if i say b-a it will sort in descending order


let arr10= [1,4,5,6,3,10,3,5,2,57];
let nums2 = arr10.sort((a,b)=>{
  return a-b;
  // increasing order mai sort hogaya 
  return b-a;
  // decreasing order mai sort hogaya 
})













