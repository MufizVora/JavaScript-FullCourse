const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
/* Output
{
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
} */

const user = {
    name: "John",
    age: 23,
    isAvailable: true,
}
/* Output
{ 
    value: 'John', 
    writable: true, 
    enumerable: true, 
    configurable: true
} */

const descriptor1 = Object.getOwnPropertyDescriptor(user, "name");
// console.log(descriptor1);

// Let's chnage our object's permission such as writable true into falses

Object.defineProperty(user, "name", {writable:false, enumerable:false});
const defineDescriptor = Object.getOwnPropertyDescriptor(user, "name");
console.log(defineDescriptor);
/* Output
{
    value: 'John',
    writable: false,
    enumerable: false,
    configurable: true
} */

for (let [key, value] of Object.entries(user)) {
    console.log(`${key} : ${value}`);
}
/* Output
age : 23
isAvailable : true */

// You will not get the value of name cause you have disabled enumeration on name property