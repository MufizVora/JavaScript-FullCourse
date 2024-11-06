// Let's discuss some static methods of number

// 1.Number.isFinite()
// The Number.isFinite() static method determines whether the passed value is a finite number — that is, it checks that a given value is a number, and the number is neither positive Infinity, negative Infinity, nor NaN.
console.log(Number.isFinite("10"));
// Output will be => false

// 2.Number.isInteger()
// The Number.isInteger() static method determines whether the passed value is an integer.
console.log(Number.isInteger(20));
// Output will be => true

// 3.Number.isNaN()
// The Number.isNaN() static method determines whether the passed value is the number value NaN, and returns false if the input is not of the Number type. It is a more robust version of the original, global isNaN() function.
console.log(Number.isNaN(10));
// Output will be => false

// 4.Number.isSafeInteger()
// The Number.isSafeInteger() static method determines whether the provided value is a number that is a safe integer.
console.log(Number.isSafeInteger(10));
// Output will be true