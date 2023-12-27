const marvel_heroes = ["thor", "Ironman", "Spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes); // pushes whole array on index 3

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);

const all_new_Heroes = [...marvel_heroes, ...dc_heroes]  // spread operator ==> spreads all the values 
// console.log(all_new_Heroes);

const another_array = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) // flat will break all the subarrays and make it as one array 

// console.log(real_another_array);

console.log(Array.isArray("Sujal"));
console.log(Array.from("Sujal"));  // convert anything into an array
console.log(Array.from({name: "Sujal"})); // interesting case ==> we need to tell whether to make an array of key or values otherwise it will return an empty array [] 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2, score3));



