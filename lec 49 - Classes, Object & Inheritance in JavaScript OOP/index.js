
// In JavaScript, classes are a way to define blueprints for creating objects. They provide a structured and object-oriented approach to organizing and creating objects with shared properties and methods. The introduction of classes in JavaScript was made easier with the release of ECMAScript 2015 (ES6). Prior to that, JavaScript used prototype-based inheritance.

// class doenot support Hoisting

class Parent{

    //  constructor
    // The this keyword refers to the current execution context, which can vary depending on how a function is called. It is often used within methods to refer to the object on which the method is invoked.
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    // method -> function inside class
    biodata(){
        console.log("Class Method Biodata");
    }

    greet(){
        return `\nhii i am ${this.name} and i am ${this.age} years old`;
    }

}

class Child extends Parent{

    // constructor 
    constructor(name, age, hobbies){
        super(name, age);
        this.hobbies = hobbies;
    }

    // The super keyword is used in classes to call methods or access properties from the parent class (superclass). It is often used in subclasses to invoke the constructor or methods of the parent class.
    biodata2(){
        console.log(`${super.greet()}, and my hobbies are ${this.hobbies.join(",")}`);
    }
}

function student(){
    console.log("\nIn student Function");
}

student();

// create a object of a class
const p1 = new Parent();
console.log(p1.greet());
p1.biodata();

const p2 = new Parent("jitendriya in Parent",21);
console.log(p2.greet());
p2.biodata();



const c1 = new Child();
console.log(c1.greet());
c1.biodata();

const c2 = new Child("jitendriya in Child",21);
console.log(c2.greet());
c2.biodata();

const c3 = new Child("jitendriya in Child",21,["Coding","Gaming","Travelling"]);
console.log(c3.greet());
c3.biodata();
c3.biodata2();