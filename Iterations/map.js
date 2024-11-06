let myMap = new Map()

myMap.set("py" , "Python")
myMap.set("js", "JavaScript")
myMap.set("css", "Cascading Stylesheet")
// It will not add below code because it is already in map and map only takes unique key and values
myMap.set("py" , "Python")

// console.log(myMap);
/* Output :
Map(3) {
    'py' => 'Python',
    'js' => 'JavaScript',
    'css' => 'Cascading Stylesheet'
  } */


// Let's use For-Of loop in map

for (const element of myMap) {
    // console.log(element);   
}
/* Output :
got whole array with key and value
[ 'py', 'Python' ]
[ 'js', 'JavaScript' ]
[ 'css', 'Cascading Stylesheet' ] */

// Let's get key and value togather to print both separately


for (const [key, value] of myMap) {
    // console.log(key, ":-", value);   
}
/* Output
py :- Python
js :- JavaScript
css :- Cascading Stylesheet */


// Let's check can we iterate an object using For-Of loop

let myObject = {
    name : 'Mufiz',
    country : 'India'
}

/* for (const [key, value] of myObject) {
     console.log(key, value);
} */
// Output : myObject is not iterable
// You cannot iterate an object using For-Of loop


// Let's see how we can iterate an object
// To do that we have to use For-In loop
let myObj = {
    js : "JavaScript",
    py : "Python",
    rb : "Ruby"
}

/* for (const key in myObj) {
    console.log(`${key} :- ${myObj[key]}`);
} */
/* Output
js :- JavaScript
py :- Python
rb :- Ruby */

// Let's iterate an array using For-In loop

let myArray = ["Python", "JavaScript", "React", "Angular"]

/* for (const key in myArray) {
    console.log(myArray[key]);
} */
/* Output : 
Python
JavaScript
React
Angular */


// Let's iterate a map using For-In loop

/* for (const key in myMap) {
    console.log(key);
} */
// Output : You will get nothing in output cause map is not iteratable