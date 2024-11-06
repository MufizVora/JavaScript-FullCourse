// Let's see what is mini-hoisting in JavaScript

// This is called hoisting, it means you access variable before declaration
console.log(addOneNumber(5))


// This is a function and it is directly created function by using function keyword, it means we have not assigned this function to a variable
function addOneNumber(number){
    return number + 1
}
// console.log(addOneNumber(5))
// Output => 6


// If you do this you will have error : Cannot access 'addTwoNumber' before initialization, because this time your function is assigned to a variable so you cannot access a variable before its declaration
console.log(addTwoNumber(5));

// Now let's assign our function to a variable and do hoising
let addTwoNumber = function(number){
    return number + 2
}
// console.log(addTwoNumber(5));
// Output => 7
