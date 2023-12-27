// array

const myArr = [0,1,2,3,4,5]
const myHeroes = ["ironman", "thor"]

const myArr2 = new Array(1,2,3,4)
// console.log(myHeroes[0]);

// Array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift();
// console.log(myArr)

// myArr[0] = "hulk";
// console.log(myArr)

// console.log(myArr.includes(1))
// console.log(myArr.indexOf(100))




const newArr = myArr.join(); //binds the array and converts it into string and also add commas in between

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice
// slice ==> just make a copy within that range without including the last element
// splice ==> cut that part of the range from original array and modifies it, including the last element of range

console.log("Initial array  " , myArr);

const myn1 = myArr.slice(1,3);
console.log("slicing this part==> " , myn1);

console.log("Original array after using slice  " , myArr);


const myn2 = myArr.splice(1,3);
console.log("splicing this part==> ", myn2);

console.log("Original array after using splice  " , myArr);


