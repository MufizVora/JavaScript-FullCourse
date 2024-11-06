// Let's see how arraow function is created

// Let's see explicit returned function
// This is called arrow function
const user = () => {
    let username = "Mufiz"
    console.log(this.username);
}
user()
console.log(typeof user());

// Output => undefined, because you cannot use this keyword in function. It is used with objects


// Let's see implicit returned function
// This is called implicit returned function
// First method to define arrow function
const addNums = (num1, num2) => num1 + num2
console.log(addNums(4,4));
// Output => 8

//Second method to define arrow function
const addNumbers = (num1, num2) => (num1 + num2)
console.log(addNumbers(4,4));

// This is how you wrap objects in arrow function
const obj = (num1, num2) => ({name : "Mufiz"})
console.log(obj(3,3));
// Output => { name: 'Mufiz' }


// Let's see different type of defining an arrow function

// 1. Basic Arrow function
// Syntax
    // varible_name = () => statement

// Example
let greet = () => console.log("Hello World");


// 2. With Parameterss
// Syntax
    // varible_name = (parameters) => statement

// Example
let num = (x, y) => x + y    


// 3. Single Parameters(Without Parantheses)
// Syntax
    // variable_name = another_variable_for_parameter => statement

// Example
let mul = x => x * x


// 4. Multi-line Body(Using Curly Braces)
// Syntax
/*      variable_name = (parameters) => {
                statement
                return
        } */
// if you use curly braces in arrow function you must return value using return keyword

// Example
let min = (a, b) => {
    result = a - b
    return result
};


// 5. Returning An Object Literal
// Syntax
    // variable_name = (parameters) => {statement}

// Example
let person = (name, country) => ({name : "Mufiz", country :  "India"})


// 6. With Default Parameters
// Syntax
    // variable_name = (default_parameters) => statement

// Eample
let userName = (name = "Mufiz") => `Hello : ${name}`       