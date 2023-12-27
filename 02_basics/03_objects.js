// singleton 
// If created using constructor, then singleton object is created but not in the case of object literal

// Object Literals


const mySym = Symbol("key1")
const JsUser = {
    name: "Sujal",
    "Full Name": "Sujal Panwar", // won't be able to access with . becoz explicitly declared as string, otherwise its implicitly declared as string and can be used by either ways-->dot or []
    [mySym]: "mykey1",   // we can only declare symbol  by using square brackets, otherwise it will take it as string 
    age: 22,
    location: "Saharanpur",
    email: "sujalpanwar2001@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["lastLoginDays"][1]);  // Saturday 
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mySym]);

JsUser.email = "abc@xyz.com"
// Object.freeze(JsUser); // wont be able to change the properties of objects 
JsUser.email = "abcdefg@xyz.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
