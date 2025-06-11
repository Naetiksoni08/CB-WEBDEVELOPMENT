function outerfun() {
    var num = 10;

    function innerfun() {
        num++;
        console.log(num);
    }
    return innerfun;
    // this will return the definition of the inner function not the value inside the inner function
}

// var temp = outerfun();
// temp();
// temp();
// temp();
// // output will be 11 12 13 14

var temp1 = outerfun();
var temp2 = outerfun();

temp1();
temp1();
temp1();
temp2();
temp2();
temp2();
// output will be 11 12 13 11 12 13




