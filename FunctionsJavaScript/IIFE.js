// Immediately Invoked Function Expressions (IIFE) in JavaScript

// This is called named  IIFE
(function welcome() {
    console.log("Welcome")
})();   

// This is called unnamed IIFE
((name) => {
    console.log(`${name}`)
})("Mufiz")