const name = "sujal"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const newName = new String("Sujal-Panwar-sp");

console.log(newName[0]);
console.log(newName.__proto__);

console.log(newName.length);
console.log(newName.toLowerCase());
console.log(newName.charAt(1))
console.log(newName.indexOf('u'))

const newString = newName.substring(0,4);
console.log(newString);

const anotherString = newName.slice(-8,4);
console.log(anotherString);

const newStringOne = "      Sujal      "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://sujal.com/sujal%20panwar"

console.log(url.replace('%20','-'));

console.log(url.includes('sujal'));

console.log(newName.split('-'));