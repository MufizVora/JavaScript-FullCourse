let myDate = new Date()
console.log(myDate);
// output will be => 2024-10-04T06:27:59.975Z

let myDateInString = new Date()
console.log(myDateInString.toString());
// output will be => Fri Oct 04 2024 11:59:44 GMT+0530 (India Standard Time)

let myDateInDateString = new Date()
console.log(myDateInDateString.toDateString());
// output will be => Fri Oct 04 2024

let myDateInISOString = new Date()
console.log(myDateInISOString.toISOString());
// output will be => 2024-10-04T06:31:50.578Z

let myDateInLocaleString = new Date()
console.log(myDateInLocaleString.toLocaleDateString());
// output will be => 4/10/2024

let myDateInJsonString = new Date()
console.log(myDateInJsonString.toJSON());
// output will be => 2024-10-04T06:36:23.265Z

let myDateInUTCString = new Date()
console.log(myDateInUTCString.toUTCString());
// output will be => Fri, 04 Oct 2024 06:37:14 GMT

console.log(typeof (myDate));
// output will be => object
