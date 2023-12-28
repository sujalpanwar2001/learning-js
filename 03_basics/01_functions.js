// function addTwoNubers(number1, number2){
//     console.log(number1+number2);
// }

// function addTwoNubers(number1, number2){
//     let result = number1 + number2
//     return result
// }

// const result = addTwoNubers(3,5)
// console.log(result);


// function loginUserMessage(username = "sam"){  // default value is sam if username  is not passed, and if passed it overrides sam 
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in `
// }

// // console.log(loginUserMessage("sujal"));
// console.log(loginUserMessage());

// rest and spread operator ...

// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000)); // op---> [500, 2000]


const user = {
    username: "sujal",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price : 500
})


const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100, 200, 300, 400 ]))
