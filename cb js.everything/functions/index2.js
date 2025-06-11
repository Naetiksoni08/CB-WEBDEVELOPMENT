// function are treated as datatypes here like string ,numbers and boolean etc

function temp() {
    console.log("hello from temp fun")
    return "hellooooooo"

}

console.log(temp());

// return value goes inside the temp only....

// if i write this then i will get the whole definition of the function
console.log(temp);

// temp is called high order function(accept or return)
function temp(x,y) {
    console.log("hello from temp function")

}
// a and b is call back function
function a() {
    console.log("hello from a");
    return 1;
}

function b() {
    console.log("hello from b");
    return 1;
}
temp(a,b);



