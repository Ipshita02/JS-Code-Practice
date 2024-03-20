// for-in loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {       // for-in loop : also works on objects
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
    
}
// nameOfDs[name of key] means values of that DS

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {        // for-in loop on maps is not possible 
//     console.log(key);
// }


const greetings = "hello world!"        // for-in loop on strings
for (const greet in greetings) {
    // console.log(greetings[greet]);
}

// summary : 
// for-in loop : objects, string
// for-of loop : string, arrays, map