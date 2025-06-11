var nums = [1,2,3,4,5,6,7,8];
console.log(nums);

var person = {
    firstname: "rahul",
    lastname: "sharma",
    age :34,
    marks: [20,30,40,50]
}

for(var i = 0 ; i<nums.length; i++) {
    console.log(nums[i]);
}
// -------for of

for(var nums of nums) {
    console.log(nums *10);
}

// -----------for in
for(var key in person) {
    console.log(key,person[key]);
}
