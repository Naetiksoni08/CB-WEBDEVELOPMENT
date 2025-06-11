// default this 

console.log(this);


function temp() {
    console.log(this);
}

temp();


// implict this
const person = {
    fullname: "naetik soni",
    age: 20,
    sayhello: function () {
        // console.log(`hello from ${this.fullname}`)
        console.log(`hello from ${person.fullname}`)
    }
}

console.log(person);
person.sayhello();


// string ko hum '' , "" , ``(esc ke niche) in tenno sai define kar skate hai `` kind of multilin estring define kar sakte hai and hum ismai varibale bhi pass kar skate hai by using ${} 





// expicit (call,apply,bind)

const box1 = {
    width: 50,
    height: 50
}


const box2 = {
    width: 20,
    height: 30
}

function updateheight(box,_height) {
    box.height = _height;

}

updateheight(box1,250);
updateheight(box2,0);
// width 50 and height 250
// widht 20 height 0


function updateheight_new(height,width) {
    this.height= height;
    this.width= width;
}

// call 
updateheight_new.call(box1,5000,1000);
updateheight_new.call(box2,3,1);
// call mai kuch nai hota value jayegi bas 


// apply
updateheight_new.apply(box1,[0,0]);
// array mai pass karke values bhej denge 

// bind
const fn = updateheight_new.bind(box2);
// new function return karega aur box2 ka refrence of box 2 will go in this keyword


console.log(box2);




// new keyword


function box3(height,width) {
 this.height = height;
 this.width = width;
}
// new keyword will make a empty object and this keyword will point the empty object 
// there is a conventional rule that js mai function is constructor only so first letter capital rakho(Box3) agar nai bhi rakhoge toh bhi joh constructor ki treat karega but ek rule sa hai follow hota aah raha hai 

// with new
const box4 = new box(50,50);
// issai 50 height mai chala jayega aur 50 width mai 

// without new 

const box5 = box(100,100);

// issai window mai height aur width varibale bana hoga aur width =100 aur height =100 aah jayega......








