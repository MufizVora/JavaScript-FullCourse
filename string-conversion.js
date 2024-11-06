// sometimes string type conversion can be confusion
// let's understand with some example


let str1 = "Hello"
let str2 = " Mufiz"

let str3 = str1 + str2
console.log(str3);
// output will be => Hello Mufiz

console.log(1 + "2");
// output will be => 12

console.log("1" + 2);
// output will be => 12

console.log("1" + "2");
// output will be => 12

console.log("1" + 2 + 3);
// output will be => 123

console.log(1 + "2" + 3);
// output will be => 123

console.log(1 + 2 + "3");
// output will be => 33

console.log("1" + (2 + 3));
// output will be => 15

console.log((1 + 2) + "3");
// output will be => 33

console.log((1 + 2) + 3);
// output will be => 6

console.log(("1" + "2") + 3);
// output will be => 123

console.log((1 + "2") + 3);
// output will be => 123