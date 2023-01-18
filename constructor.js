//constructor-special method of a class for creating and initializing an object instance of that class.

//constructor function
/*
const person = {
    name : "Yash",
    age :20,
    //func as properties inside a object
    sayHey : function(){
        console.log("Hey!!...")
    }

}

function Person(name , age){ 
     
this.name = name;
this.age = age;
this.sayHey = function(){
    console.log("hey!!....")
}

}

const p1 = new Person("aman",20);
p1.email = "aman@gmail.com"//add some property
console.log(p1)
p1.sayHey()
*/

//

class Person{

    constructor(){

    }
    hello(){

        console.log("saying hello ")
    }
}

const p1 = new Person();
console.log(p1);
console.log(typeof(p1));