// comparion "<, >" works differently than "=="

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// Avoid these weird types of conversion

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// the reason is that an equality check == and comparison > < >= <= work differnently.
// Comparisons convert null to a number, treating it as 0.

// === -> strict check. Not only check values but also check datatypes

console.log("2" === 2);
