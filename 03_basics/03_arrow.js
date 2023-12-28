const user = {
    username: "Sujal",
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);  ----> will print the current context
    }
}


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()



// console.log(this)  ----> in node this will refer to current context that empty {}----> an empty object , but its diff in browser console  ----> in browser global object is window 


// function chai(){  //--------> first type of declaration  ( hoisting works, can be called b4 declaration )
//     let username = "sujal"
//     console.log(this.username);  //---> this doesnt work as expected inside the function as it works in object 
// }

// chai()  


// const chai = function() {       //----> second type of declaration ( hoisting doesn't work in this one )
//     let username = "sujal"
//     console.log(this.username);  
// }

const chai = () => {       //----> ARROW FUNCTION ---> third type of  declaration ( hoisting doesn't work in this one )
    let username = "sujal"
    console.log(this.username);  
}


// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// const addTwo = (num1, num2) =>  num1+num2    // implicit return function, it expects that the value return after it is the one to be returned
// const addTwo = (num1, num2) =>  (num1+num2)    // can also be done like this

const addTwo = (num1, num2) => ({username:"sujal"})   // ***** to return an object in arrow function the brackets are compulsory


console.log(addTwo(1,2));