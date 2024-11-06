// 1. If statement

// Syntax
// if (condition) {
//     Executes if condition is true
// }

const number = 13
if (number > 10) {
    console.log("Number is grater than 10"); 
}
// Output => Number is grater than 10


// 2. If-Else statement

// Syntax
// if (condition) {
//     Executes  if condition is true
// } else {
//     Executes if condition is false
// }

const num = 5
if (num > 10) {
    console.log("Number is grater than 10");
} 
else {
    console.log("Number is less than 10");
}
// Output => Number is less than 10


// 3. Nested If-Else statement

// Syntax

const name = "Mufiz"
if (name == "Aadil") {
    console.log(`Your name is : ${name}`);
} 
else if(name == "Ajaz"){
    console.log(`Your name is : ${name}`);
}
else if(name == "Mufiz"){
    console.log(`Your name is : ${name}`);
}
else {
    console.log("No name");
}


const month = "July"

switch (month) {
    case 'January':
        console.log("It's January");
        break;
    case 'Febuary':
        console.log("It's Febuary");
        break;
    case 'March':
        console.log("It's March");
        break;
    case 'April':
        console.log("It's April");
        break;
    case 'May':
        console.log("It's May");
        break;
    case 'June':
        console.log("It's June");
        break;
    case 'July':
        console.log("It's July");
        break;

    default:
        console.log("It's No Month");
        break;
}