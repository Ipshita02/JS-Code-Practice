const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // this keyword is used to refer current context or current scope or current values of the variable
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);    // in browser the global object is window

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);      // it is worrking in objects. Functions ke andar aakr 'this' use nhi kr paa rhe h
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// arrow function :
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()