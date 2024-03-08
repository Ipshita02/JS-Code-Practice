// In JS all Datatypes are divided into 2 parts. Primitive and Non-Primitive
// The categorization is done on the basis of How variables are stored and accessed in the memory.
// Call by value and Call by reference

// Primitive -> call by value [changes are done in copy]

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);   // false

// const bigNumber = 3456543576654356754n   => bigint


// Reference (Non primitive)

// Array, Objects, Functions

// Array
const heros = ["shaktiman", "naagraj", "doga"];

// Object => in curly braces "{}"
let myObj = {
    name: "hitesh",
    age: 22,
    // anything can come here string, function, array or even a different object
}

const myFunction = function(){
    // function is stored in a variable "myFunction"
    console.log("Hello world");
}

console.log(typeof outsideTemp);  //object
// console.log(typeof myFunction);    //function-object

// All Non-Primitive datatypes' typeof is => object 

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function-object
       Object  =>  object
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Two types of memory: Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hitesh"
let anothername = myYoutubename
anothername = "chaiparcharcha"

console.log(myYoutubename);
console.log(anothername);

// In stack memory we get a copy of variable.

let userOne = {
    email: "user@gm",
    upi: "user@kyc"
}

let userTwo = userOne
// accessing object property
userTwo.email = "hitesh@gooale.com"
console.log(userOne );
console.log(userTwo);
// In heap memory we get reference of original value so everything that we change get change in original value

// https://262.ecma-international.org/5.1/#sec-11.4.3