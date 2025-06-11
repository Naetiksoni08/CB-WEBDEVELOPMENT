function getmethod(type) {
    function add(a, b) {
        return a + b;
    }
    function multiply(a, b) {
        return a * b;
    }
    if (type == "add") {
        return add;
    }
    else if (type == "multiply") {
        return multiply;
    }
    else {
        function temp() { };
    }
}

var add = getmethod("add");
console.log(add(2, 8));
console.log(multiply(2));
var multiply = getmethod("multiply");

