let score = "33abc"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber); // NaN ==> not a number 


// "33" => 33
// "33abc" => NaN
// for null it converts to 0
// for undefined in converts to NaN
// for boolean true it converts to 1
// for string it converts to NaN  


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);

// 1 => true, 0 => false
// "" => false
// "sujal" => true 


let someNumber = 33

let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log(typeof stringNumber);


// ******************* Operations **********************//

let value = 5
let negValue = -value
// console.log(negValue);

// console.log(3+2);
// console.log(3*2);
// console.log(3**2);
// console.log(3/2);  // doesnt convert to string, 3/2 => 1.5
// console.log(3%2);


let str1 = "sujal"
let str2 = " panwar"
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(true + true); ==> 2
//  console.log(+true);
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);


