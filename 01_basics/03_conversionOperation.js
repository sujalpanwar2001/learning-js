let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN ==> not a number 


// "33" => 33
// "33abc" => NaN
// for null it converts to 0
// for undefined in converts to NaN
// for boolean true it converts to 1
// for string it converts to NaN  


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

// 1 => true, 0 => false
// "" => false
// "sujal" => true 


let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);
