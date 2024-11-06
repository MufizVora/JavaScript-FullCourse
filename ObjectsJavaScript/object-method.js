// Object.assign() method
const target = {"a":"1", "b":"2"}
const source = {"c":"3","d":"4"}

const assign = Object.assign({}, target, source)
// console.log(assign);
// console.log(typeof assign);


// Object.create() method

let car = {
    name : "BMW",
    model : "2024",
}
// console.log(car);
const newCar = Object.create(car)
newCar.name = "Creata";
// console.log(newCar);

// Object.freeze() method
const obj = {
    name: "John",
    country : "Australia",
}
Object.freeze(obj);
obj.name = "Bunny";
// console.log(obj.name);

// Object.keys() method
let obj1 = {
    name: "John",
    country : "Australia",
}
const myKey = Object.keys(obj1);
// console.log(myKey);

// Object.values() method
let obj2 = {
    name : "Bunny",
    country : "UK",
}
const myValue = Object.values(obj2);
// console.log(myValue);

// Nested object
let name = {
    1 : "John",
    2 : "Smith",
    country : {
        1 : "India",
        2 : "Australia",
    }
}
// console.log(name.country); // This is how you access values in nested object

let name1 = {
    aName : "John",
    iName : "Smith",
}
let name2 = {
    1 : "Johnson",
    2 : "Harry",   
}
const combineName = {...name1, ...name2}; // This is how you combine two objects into one variable
// console.log(combineName);

// Object.entries() method
let users = [
    {
        id : "1",
        email : "mv@microsoft.com",
    },
    {
        id : "2",
        email : "sm@microsoft.com",
    },
    {
        id : "3",
        email : "mk@microsoft.com",
    },
]
// console.log(Object.entries(users));

// hasOwnProperty() method
const device = {
    name : "Iphone",
    model : "2025",
    country : "US"
}
// console.log(device.hasOwnProperty('name'));
