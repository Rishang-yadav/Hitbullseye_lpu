/*1. explaing the architecture of nodejs
2. explain the feature of nodejs like non-blocking, synchronous, single threaded.
3. create a array and object in javascript and print it.
4. Nowadays how data is transferred between server and client?(explain about json)
5. write program to show how to append, pop and sort elements in array in javascript.
6. why should we use let in place of var in our javascript programs?
7. explain about all the primitive data types in javascript*/

Question 1 
Ans - 
Node. js uses the “Single Threaded Event Loop” architecture to handle multiple concurrent clients. Node. 
js Processing Model is based on the JavaScript event-based model along with the JavaScript callback mechanism.
Basically, Node.js is a combination of Google’s V8 JavaScript engine, an event loop, and a low-level I/O API.

question 2
Ans -
1>Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine
2>Node.js uses an event-driven, asynchronous non-blocking I/O model
3>Node.js operates on a single thread event loop
Short for input/output, I/O refers primarily to the program’s interaction with the system’s disk and network.
Examples of I/O operations include reading/writing data from/to a disk, making HTTP requests, and talking to databases.
They are very slow compared to accessing memory (RAM) or doing work on the CPU.

question 3
Ans -
const cars = ["Saab", "Volvo", "BMW"];
console.log(car);

question 4
Ans - 
JSON, or JavaScript Object Notation, is a format used to represent data. It was introduced in the early 2000s
as part of JavaScript and gradually expanded to become the most common medium for describing and exchanging text-based data. 
Today, JSON is the universal standard of data exchange. It is found in every area of programming, 
including front-end and server-side development, systems, middleware, and databases.

question 5
Ans-
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
fruits.app

let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort();
console.log(numbers);

let numbers = [0, 1, 2, 3, 10, 20, 30];
numbers.sort((a, b) => a - b);
console.log(numbers);

question 6
Ans-
var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped. 
Variable declared by let cannot be redeclared and must be declared before use whereas variables declared with var keyword are hoisted

question 7
Ans-
What are the primitive data types in JavaScript?
In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.
There are 7 primitive data types:
string.
number.
bigint.
boolean.
undefined.
symbol.
null.