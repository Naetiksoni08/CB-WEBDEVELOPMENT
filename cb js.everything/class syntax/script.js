class Rectangle {
     constructor(length,breadth) {
        this.length = length;
        this.breadth = breadth;
     }

     area() {
        return this.length * this.breadth;

     }
}

const r1 = new Rectangle(10,20);
console.log(r1);


// inheritance ke through cuboid nikal bas height add ho jayegi

class Cuboid extends Rectangle{
   constructor(length,breadth,height) {
    super(length,breadth);
    this.height = height;
   }

   volume() {
    return this.length * this.breadth * this.height;
   }
}

const c1 = new Cuboid(10,20,30);
console.log(c1);
// super keyword hum tabh likhte hai jab hume parent class inherit karna hota hai basically joh extend karte hai class usko access karne ke liye 

