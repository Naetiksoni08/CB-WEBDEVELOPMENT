function person(name,age) {
    this.name = name;
    this.age = age;

}

class Person{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    static somefun() {
        console.log("hello from some fun")
    }

    sayhello() {
        console.log(`hello from ${this.name}`)
    }

    get getage() {
        return this.age;
    }
    set setAge(age) {
        this.age =age;

    }

}
 const p1= new person("mohit singh",35);
 console.log(p1);
//  when we call a function with setter and getter keyword then we to call it as a property not as function..


console.log(p1.getAge);


p1.setAge = 50;
console.log(p1.getAge);


p1.somefun();
// it will show error 


person.somefun();
// the output will be hello from some fun 
// so the core concept is that when u make a fucntion static then if we try to call it object it will show error but u can access it with the help of class name 
