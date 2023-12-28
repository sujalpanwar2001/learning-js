// Immediately Invoked Function Expressions (IIFE) ---> can be used like for DB connetion, which we want to happer immediately, to prevent global pollution  in global scope

(function chai() {
    console.log("DB CONNECTED ");
})();

// semi colon is needed to end the first iffe function so that after that can also be executed, tells where to end the execution of first iffe function 

( (name) => {
    console.log(`DB CONNECTED 2, ${name}`);
})("sujal")


// syntax ----> ()()