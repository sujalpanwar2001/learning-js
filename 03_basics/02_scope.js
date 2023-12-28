// var can be accessed out of scope thats why var is never used, only use let 

let a = 300
if(true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}

// console.log(a);

function one(){
    const username = "sujal"

    function two(){
        const website  = "youtube"
        console.log(username);
    }
    // console.log(website);
    // two()
}


// one()

if(true){
    const username = "sujal"
    if(username === "sujal"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


console.log(addone(5)); // calling before declaring 


function addone(num){ // this way of declaring function supports code hositing, the declaration go ups automatically so we can call them before declaring 
    return num+1
}



const addTwo = function(num){ // expression, addTwo variable holding the function in it--------> doest support code hoisting as the function is being held  by a variable 
    return num+2
}

console.log(addTwo(2));

