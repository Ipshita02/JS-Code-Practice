// for-of loop

// ["", "", ""]  => array of string
// [{}, {}, {}] => array of objects

// for (const iterator of object) {} => for-of loop syntax
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}


// Maps : unique values :: mdn document
// remembers the order of insertion, no duplicate value
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
map.set('Fr', "Finland")
map.set('Fd', "Finland")
map.set('UK', "United kingdom")
map.set('Fr', "IDK")

// console.log(map);

for (const [key, value] of map) {       // for-of loop
    // console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {       //for of loop : not working on objects
//     console.log(key, ':-', value);
    
// }
