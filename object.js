//14 jan
//object->is non primitive datatype and 
//allow you to store multiple data
// create a obj witout class in js

/*const student = {
    name : "tarun",
    age : 20,
    email : "tarun @gmail.com",
    address :{
        city : "mohail",
        state : "punjab",
        country : "India"
    },
    printDetails : function(){//only anonymous function passed inside the object
        console.log("name :",this.name)//this-obj ele accssed in fun
    }

}
student.phone = 1234567890
console.log(student)
console.log(student.printDetails())//call func
console.log(student.address.state)
console.log(student.name)//accsed name ,age using dot and square bracter
console.log(student['age'])*/


// can function pass inside object ? yes
//javascript object methods


//how can you add func inside the obj
const student = {
    name : "tarun",
    age : 20,
    email : "tarun @gmail.com",
    address :{
        city : "mohail",
        state : "punjab",
        country : "India"
    },
}   
//write your code here
student.printStudentName = function(){
    console.log(student.name);
}

student.printStudentName()//output: tarun