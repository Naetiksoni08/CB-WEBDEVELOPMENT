const colors = require('colors');
const giveMeAJoke = require('give-me-a-joke');
const figlet = require('figlet');
// console.log('HELLO WORLD'.rainbow);
// console.log('HELLO WORLD'.bgMagenta);
// console.log(colors);
console.log('HELLO WORLD'.bgYellow);
// console.log('HELLO WORLD'.rainbow);
console.log('HELLO WORLD'.bgMagenta);

 

//give me a joke
giveMeAJoke.getRandomDadJoke(function(joke){
    console.log(joke);
    console.log(joke.rainbow);
})
// if u will notice this guve me a joke thoda late aah rha hai uska reason yehi hai ki mtlb usse kahi ssai fetch vagera karne mai time lag raha hoga
// figlet
figlet('JAVASCRIPT',(err,data)=>{
    if(err) {
        console.log("Something went Wrong");
        return;
    }
    // console.log(data);
    console.log(data.rainbow);
})

