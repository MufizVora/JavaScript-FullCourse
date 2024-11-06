// Let's see how arrays are decalred and initialized

const myArray = [0, 1, 2, 3, 4, 5]
console.log(myArray);
console.log(typeof (myArray));

// array slice() method
const myArr1 = myArray.slice(1, 3)
console.log("A", myArray);
console.log(myArr1);

// array splice() method
const myArr2 = myArray.splice(1, 3)
console.log("B", myArray);
console.log(myArr2);