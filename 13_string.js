let a = "Amit";
console.log( a );
console.log( a.length );
console.log(a[0]);
console.log(a[1]);


// Template literals
let boy1 = "harshit";
let boy2 = "priti";
//priti is a friend of harshit
let sentence =`${boy2} is a friend of ${boy1}`
console.log(sentence)


//Escape Sequence Character
let fruit = 'bana\'na'
console.log(fruit)

//sting method
let nam = "jayant"
console.log(nam.length)
console.log(nam.toUpperCase())
console.log(nam.toLowerCase())
console.log(nam.slice(2,4))
console.log(nam.slice(2))
console.log(nam.replace("jaya","isha"))

let friend = "isha"
console.log(friend.concat(" is a friend of ", nam))

let friend2 = "   sita     "
console.log(friend2.trim())