const score = 400
// console.log(score);

const balance = new Number(100)     // "new" keyword is used for objects
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());     // range [0-1]
console.log((Math.random()*10) + 1);
// Values can be 0.042 so to avoid zero we add 1 in it since we want values above 0
console.log(Math.floor(Math.random()*10) + 1);

// If we want random no.s in certain range
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// '(max - min + 1)' => In a certain range & we add 1 to avoid 0
// 'Math.floor(Math.random() * (max - min + 1))' is same as 'Math.floor(Math.random()*10) + 1)'
// to get atleast the min value we added the min value in it

