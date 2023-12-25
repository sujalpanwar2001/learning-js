 const accountId = 12345
 let accountEmail = "sujal@gmail.com"
 var accountPassword = "12345"

 accountCity = "Mumbai"

//  console.log(accountState)   // won't work with let keyword as hoisting doesn't happpen in this
 let accountState 


 // changing values

//  accountId = 1213 //can't change constant variable 

accountEmail = "happy@gmail.com"
accountPassword = "1611"
accountCity = "Delhi"

/* 
Prefer not to use var
because of issue in block scope and functional scope 

let has block scope  and var has global scope so don't use var 


var do code hoisting after initialization the varible goes to the top and the variable can be called before its initialization and is set as undefined, but with let it cant be called before initialization
*/

 console.log(accountId)
 console.table([accountId, accountEmail, accountPassword, accountCity, accountState])