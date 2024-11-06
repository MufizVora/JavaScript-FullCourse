// Object destructuring

// What is object-destructuring?
    //JavaScript allows you to extract properties from an object and assign them to variables. This feature is handy when working with large objects or extracting specific properties from an object.
let car = {
    name : "BMW",
    model : "2024",
    country : "Australia",
}

let {name} = car;
// console.log(name);


let car1 = {
    name : "BMW",
    model : "2024",
    country : "Australia",
}
// You can also give name to a variable as per your choice
let {name : mycarname} = car;
// console.log(mycarname);