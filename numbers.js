// Let's delcare and initialize a number value to a variable

const score = 400
console.log(score);
// output will be 400


const numberScore = new Number(100)
console.log(numberScore);
// output will be 100

// constructor => number()

// Method of Number
// Prototype
/*
toExponential
toFixed
toLocaleString
toPrecision
toString
valueOf
*/

console.log(numberScore.toString().length);
// output will be 100 and lengh will be 3

console.log(numberScore.toFixed(3));
// output will be 100.000

console.log(numberScore.valueOf(0));
// output will be 

const otherNumber = 22.365
console.log(otherNumber.toPrecision(3));
// it gives precise value in output
// output will be 22.4

const localString = 10000000
console.log(localString.toLocaleString());
// you will have a problem to read this value cause it contains a lots of zeros
// so, we use toLocaleString() method to make this value readable
// this method separates zeros with comma so that we can easily read it
// output will be 1,00,00,000 => this will be based on US 

// here you can get india besed comma

const localString1 = 1000000
console.log(localString1.toLocaleString('en-IN'));
// output will be 10,00,000


// ---------- Maths ----------

console.log(Math);
// output will be => Object [Math] {}

console.log(Math.abs(-4));
// it converts negative values into positive but it does not convert positive values into negative
// output will be => 4 

console.log(Math.round(4.6));
// it gives the integer nearest value 
// output will be => 5

console.log(Math.ceil(4.2));
// ceil means it will give top value 
// output will be => 5

console.log(Math.floor(4.9));
// floor means it will give down value
// output will be => 4

console.log(Math.min(1, 18, 45));
// it gives the minimum value 
// output will be => 1

console.log(Math.max(1, 18, 45));
// it gives the maximum value 
// output will be => 45

console.log(Math.random());
// it will give random values everytime you use random() method
// this time output will be => 0.32620885357260176
// now let's run again 
// this time output will be different than pervious one => 0.3052030966376238
