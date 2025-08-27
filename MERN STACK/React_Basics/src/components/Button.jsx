
const button  = document.querySelector("button");
console.log(button); // earlier we use do this like manipulate suing dom but we dont do this in react r
// react says i can do all these task you just focus on the logic so what we do is this  
// on click will be in camel case simple

function isclick(e) {
    console.log(e.target);
console.log("clicked !!")
}

function Button() {
  return (
    // <button onClick={isclick}>Click me</button>
    <button onClick={(e)=>isclick(e)}>Click me</button> // this also works we have just made a wrapper function 
  )
}

export default Button