// Let's discuss some static properties of number

// 1.Number.EPSILON 
// The difference between 1 and the smallest number > 1.
// It represents the smallest positive number that, when added to 1, gives a number different from 1.
const result = 0.46325;
console.log(result);
// Output will be => 0.46325
console.log(result < Number.EPSILON);
// Output will be => flase

// 2.Number.MAX_VALUE 
// It represents the maximum positive number that can be represented in JavaScript.
let maxValue = Number.MAX_VALUE;
console.log(maxValue);
// Output will be => 1.7976931348623157e+308

// 3.Number.MIN_VALUE 
// It represents the minimum positive number that can be represented in JavaScript.
let minValue = Number.MIN_VALUE;
console.log(minValue);
// Output will be => 5e-324

// 4.MAX_SAFE_INTEGER 
// It represents the maximum safe integer in JavaScript.
let maxSafeInteger = Number.MAX_SAFE_INTEGER;
console.log(maxSafeInteger);
// Output will be => 9007199254740991

// 5.MIN_SAFE_INTEGER
// It represents the minimum safe integer in JavaScript.
let minSafeInteger = Number.MIN_SAFE_INTEGER;
console.log(minSafeInteger);
// Output will be => -9007199254740991

// 6.POSITIVE_INFINITY
// It represents positive infinity (returned on overflow)
let positiveInfinity = Number.POSITIVE_INFINITY;
console.log(positiveInfinity);
// Output will be => Infinity

// 7.NEGATIVE_INFINITY	
// It represents negative infinity (returned on overflow)
let negativeInfinity = Number.NEGATIVE_INFINITY;
console.log(negativeInfinity);
// Output will be => -Infinity

// 8.NaN
// It's used when a mathematical operation results in an undefined or non-numeric value.
let notNumber = Number.NaN;
console.log(notNumber);
// Output will be => NaN
