// array part-2

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// array can take any type of element, it can be an array also.
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// push() pushes on original array but concat returns a new array

// spread operator : 
const all_new_heros = [...marvel_heros, ...dc_heros]        // multi-values
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))   // convert into array
console.log(Array.from({name: "hitesh"})) // interesting => we need to tell ki keys ka array banao ya sari values ka array banao

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));