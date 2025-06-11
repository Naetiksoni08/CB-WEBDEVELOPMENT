function counter() {
    let counter =0;

    // function increment() {
    //     counter++;
    // }
    // function decrement() {
    //     counter--;
    // }
    // function getcounter() {
    //     return counter;
    return {increment:()=>counter++,
    // }
    decrement:() => counter--,
    getcounter:() => counter}

    return {increment,decrement,getcounter}
}
const object = counter();
console.log(object);
object.increment();
console.log(object.getcounter());
