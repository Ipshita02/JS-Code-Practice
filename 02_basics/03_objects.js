// objects part-1
// object : key - value pair
// 2 ways to declare an object : literal &  constructor
// singleton : constructor
// Object.create    => constructor method

// object literals : 
const mySym = Symbol("uniqueKey")  // The symbol mySym is defined once with the description "uniqueKey". This description is just a label.
// const mySym = Symbol()   => this is also a way to declare mySym as Symbol.

const JsUser = {
    name: "Hitesh",      // keys are stored in double quotes => name is stored as "name" in JS
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",      // syntax of symbol in objects. They are stored as strings only.
    age: 18,
    location: "Jaipur",     // after every key-value pair coma ","
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])          // this is the syntax

/*
Symbols in JavaScript are unique identifiers, and they need to be defined explicitly before they can be 
used as property keys in an object. Unlike string keys like 'age', which can be defined inline, symbols 
need to be created separately using the Symbol() function.

In the case of the 'age' property, it's a conventional property with a string key. You can define 
such properties inline without any separate declaration because string keys are straightforward and don't 
require special handling like symbols do.
*/

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
