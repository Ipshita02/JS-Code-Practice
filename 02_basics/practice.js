// objects -> literal

const sym = Symbol("uni")
const jsMem = {
    name: "ipshita",
    "full name": "ipshita srivastava",
    age: 22,
    [sym]: "ip",
    location: "manipur",
    email: "money@money.com",
    isLogged: true
}

// console.log(jsMem.age);
// console.log(typeof jsMem.age);
// console.log(jsMem ["full name"]);
// console.log(jsMem  ["email"]);
// console.log(jsMem [sym]);
// console.log(typeof jsMem [sym]);

jsMem.age = 12
Object.freeze(jsMem)
jsMem.age = 78
// console.log(jsMem);


// objects -> constructor

const discordUser = {}

discordUser.id = "23dc"
discordUser.name = "sam"
discordUser.age = 26
discordUser.gender = "male"
discordUser.isLoggedIn = "true"

// console.log(discordUser);

const frequentUser = {
    email: "any@gmail.com",
    fullname: {
        userNo: 7886,
        userFullName: {
            firstName: "ipshita",
            lastName: "srivastava",
            someName: "idk",
            petName: "toto"
        },      // this coma is IMP
        something: "toPrint"
    }
}

// console.log(frequentUser);
// console.log(frequentUser.fullname.userFullName.petName);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
console.log(returnedTarget === target);  // Expected output: true
