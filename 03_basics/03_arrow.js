const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // this keyword is used to refer current context. or current scope or current values of the variable
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);    // but in browser the global object/scope is window 

// function chai(){
//     console.log(this)
//     let username = "hitesh"
//     console.log(this.username);      // 'this' is working in objects. Inside functions 'this' not working
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// arrow function syntax : () => {}
const chai =  () => {
    let username = "hitesh"
    console.log(this.username);
}
// chai()

// const addTwo = (num1, num2) => {     // basic arrow function
//     return num1 + num2
// }


// implicit return : no need for return keyword since its a single line of code
// const addTwo = (num1, num2) =>  num1 + num2      

// const addTwo = (num1, num2) => ( num1 + num2 )
// Attention : above after arrow agar curly braces use kr liya instead of parenthesis tab return keyword is needed
// here "( num1 + num2 )"

const addTwo = (num1, num2) => ({username: "hitesh"})      // aboject return


// console.log(addTwo(3, 4))        ~~~

// function () {}   // simple function
// () => {}         // arrow function
// () => ()         // implicit return in arrow function
// we can hold these functions inside a variable

// we can use "this" inside arrow fn. they point to their lexical scope.
// scope where code/block are written is called lexical scope of arrow fn.
