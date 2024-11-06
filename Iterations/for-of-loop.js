// Let's iterate an array using For-Of loop

let myArray = [1,2,3,4,5]

for (const value of myArray) {
    console.log(value);
}
/* Output => 
1
2
3
4
5 */

const myString = "Hello World"

for (const i of myString) {
    if (i == " ") {
        continue;
    }
    console.log(i);
}