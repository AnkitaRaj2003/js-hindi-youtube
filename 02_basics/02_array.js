const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //add the array dc_heros completely not the elements of it

// console.log(marvel_heros); - ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// console.log(marvel_heros[3][1]); - flash

// const allHeros = marvel_heros.concat(dc_heros) // add the elements of dc_heros to marvel_heros - we have to store it, it doesnt make any change to the original array
// console.log(allHeros);

//The spread operator (...) in JavaScript expands an iterable (like an array, string, or object) into individual elements. 
const all_new_heros = [...marvel_heros, ...dc_heros] // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // The flat() method in JavaScript is used to flatten an array, creating a new array with all sub-array elements concatenated into it recursively up to a specified depth. 
//another_array.flat(1) - [1, 2, 3, 4, 5, 6, 7, 6, 7, [4, 5]]
//another_array.flat(2) - [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting, gives [] 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100,200,300]
