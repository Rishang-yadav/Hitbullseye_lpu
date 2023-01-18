/*let a = 1;
let b = 2;
let c = 3;
 function suM(x,y){
    return x+y;

 }
 console.log("sum of two number",suM(a,b));
 //variable  is a store container that store some value
 //datatype-what type of data store by variable
*/

/*var num = 0;
var arr = [ "1", "1", "2", "1", "2" ];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "1") { 
      num++; 
    }
}
console.log(num)*/


//function 14-01-2022
//declaring
/*function msg(){
  return "Welecome to class"
}

//calling
console.log(msg())*/

//function parameters->value is passed when declare a function

//function argument->value passed at time of function call
function addNumbers(a,b){
  console.log(a+b)
}
addNumbers(3,4)
addNumbers("Hello","World")
addNumbers()//NAN

//default parameters->If a function in JavaScript is called with missing arguments (less than declared), the missing values are set to undefined
function defautPara(a,b)//names function
{
  console.log(a)
  console.log(b)
  console.log(a+b)

}
defautPara(b=8,a=0) 

//Anonymous function->it is function does not have any name associated with in
/*Syntax
function() {
    // Function Body
 }

 We may also declare an anonymous function using the arrow function technique which is shown below:

( () => {
    // Function Body...
} )();
*/ 

/*var add = function(){
  //console.log(a+b)
  return "hiii....."
}
//add(3,4)//call function
//console.log(add)//function :add
console.log(add())//hiii.....
*/
var add = function(){
  //console.log(a+b)
  return "hiii....."
}()//immediately invoke function
console.log(add)

//15 jan




