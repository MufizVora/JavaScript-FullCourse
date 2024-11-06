// Let's learn what is called function, parameter and argument

// Defination of function

// Syntax of function
function nameofyourfunction(params) {
    // This is called block of function
}

nameofyourfunction(arguments)

// Example
// First method to create a function
function addNumbers(num1, num2){
    console.log(num1 + num2);
}
addNumbers(5,5)
// Output => 10

// Second method to create a function
function addNums(number1, number2) {
    let result = number1 + number2
    return result
}
const result = addNums(5,5)
console.log("Result : ", result);
// Result : 10
// Output => 10

// Third method to create a function
function addTwoNums(nums1, nums2) {
    console.log("Mufiz");
    return nums1 + nums2
    console.log("Mufiz") // This will not be printed cause this is written after return keyword
    // Note : if you write anything after return statement, nothing will be executed
    // If you want to print "Mufiz" on console witre your code before return statement
}
addTwoNums(5,5)
// Output => 10