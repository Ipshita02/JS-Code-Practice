// {} => scope when it comes with functions, if-else
// when curly braces comes with object that is object declaration
// block scope written inside {} , global scope i.e. written outside of {}

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){         // 2
    const username = "hitesh"       // 3

    function two(){         // 6
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);        // 4

    two()       // 5

}
// one()       // first this will execute
// Trick : child can access parent varible

if (true) {
    // check errors
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}