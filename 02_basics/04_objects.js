// const tinderUser = new Object() // creates a singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "something@gmail.com",
    fullname: {
        userFullname: {
            firstname: "sujal",
            lastname: "panwar"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {4:"a", 5:"b"}

// const obj3 = { obj1, obj2}
//  const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1,...obj2,...obj3} // spread operator 
// console.log(obj4);

const users = [
    {
        id:1,
        email:"suajal@ga.com"
    },
    {
        id:2,
        email:"2jal@ga.com"
    },
    {
        id:3,
        email:"3ajal@ga.com"
    }

]

// console.log(users[0].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // returns an array of all keys in the object
// console.log(Object.values(tinderUser)); // returns an array of all values in the object
// console.log(Object.entries(tinderUser)); // returns an array of arrays of key value [ [,,,,,] , [,,,,,], [,,,,,]] 

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // returns boolean value if this property/key exists or not 


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const { courseInstructor: instructor} = course 

console.log(instructor);

// JSON
// {
//     "name" : "Sujal",
//     "coursename" : "chai aur js",
//     "price" : "free"
// }

// in the same way we will destructure the json, because its in  kind of an object format 