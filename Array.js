//Array method

/*let num = [1,2,3,4,5]
let b = num.toString()//b is now a string
// console.log(b)
// console.log(typeof b);

num.shift()
console.log(num)
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])*/


//splice and slice
 //using loop with array

 //const num =[3,2,1,6,7];

// for(let i=0;i<num.length;i++){
//     console.log(num[i]);
// }

//forEach()->call a function ,once for each array element
//const a=[1,2,3];
//a.forEach((value,index,array)=>{
// function logic
//})
// num.forEach((element)=>{
//     console.log(element*element)
// })


//Array.from->Create an array from a string
// let name = "Harry";
// let arr = Array.from(name)
// console.log(arr);

//for .. of
// for(let item of num){
//     console.log(item)
// }

//for..in
//  for(let i in num){
//     console.log(i)
//  }

 //20 map,filter,reduce 19 jan
 //Map()->create a new array by performing some operation on each array
//Array map method
//  let brr = [45,23,21]
//  let a =brr.map((value)=>{
//     console.log(value)
//     return value + 1
//  })
// console.log(a)

//Array Filter method
// let arr2 = [45,23,21,0,3,5]
// let a2 = arr2.filter((a)=>{
//     return a<10
// })
// console.log(a2)

//Array reduce method
// let arr3 = [1,2,3,4,5,2,1]
// let a3 = arr3.reduce((h1,h2)=>{
//     return h1 + h2
// })
// console.log(a3)

// chapter 5 Practice set 

//q1

let arr = [1,2,3,4,5,6];
let a = prompt("take input from user");
let arr2 = a.push(arr);
console.log(arr2);