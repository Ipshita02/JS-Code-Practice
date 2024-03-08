const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");  => poor way to write code

// String interpolation using backticks
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc')     // object key: value pairs
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());   => original value is not changed
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)      // First index is included last index is not
console.log(newString);

const anotherString = gameName.slice(-8, 5)     // First index is included last index is not
console.log(anotherString);
// -ve string starts from back (-1) and then goes on

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

const stringTOArray = ('hitesh-hc-com')
console.log(stringTOArray.split('-'));