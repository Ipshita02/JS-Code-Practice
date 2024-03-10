// Immediately Invoked Function Expressions (IIFE) : 
// 1. It executes immediately after it's defined.
// 2. global scope ke variables se prb hoti h, ya uske jo bhi variables h ya jo bhi declarations h uski
// pollution ko hatane ke liye humne ye iife ka use kiya
// 3. It helps to mitigate issues related to global scope variables or declarations, by encapsulating them within its own scope.


(function chai(){
    // This is a named IIFE
    console.log(`DB CONNECTED`);
})();      
// ()()
// this iife has a scope prb cause it doesn't know where to stop the context.
// In JavaScript, when using IIFE, it's crucial to end the line with a semicolon to avoid ambiguity regarding where the context ends.

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');     // It's important to end an IIFE with a semicolon to prevent unexpected behavior.


((num1, num2) => {
    console.log(`sum of ${num1} and ${num2} is : ${num1 + num2}`);
})(3, 7);