// Let's iterate an array using For-Of loop

let myArray = [1,2,3,4,5]

for (const value of myArray) {
    // console.log(value);
}
/* Output :
1
2
3
4
5 */

// Let's iterate a string using For-Of loop

let myString = "Hello"

for (const str of myString) {
    // console.log(str);
}
/* Output :
H
e
l
l
o  */   

const obj = { France: "Paris", England: "London" };
for (const p in obj) {
//   console.log(obj[p]);
  
} // TypeError: obj is not iterable


const arr = [1,2,3,4,5,6,7,8]

for (const key in arr) {
    // console.log(arr[key]);       
}


