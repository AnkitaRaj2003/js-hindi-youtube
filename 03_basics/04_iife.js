// An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is defined and executed immediately after its creation.
// Variables declared inside an IIFE don’t pollute the global scope.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

