const myArray = ['Python', 'Ruby', 'JavaScript', 'React']

// We will use three methods to use for-each loop with array

// Note : callback function does not take function name,
// This is the first method to use ForEach with array
myArray.forEach( function (item) {
    // console.log(item);
} )
/* Output :
Python
Ruby
JavaScript
React */

// Now let's see second method to use ForEach with array
// Let's use arrow function
myArray.forEach( (item) => {
    // console.log(item);
} )
/* Output :
Python
Ruby
JavaScript
React */

// Let's see third method to use ForEach with array

function printMe(value) {
    console.log(value);
}

// Here you will not call the function instead, you only give a reference of the function
// myArray.forEach(printMe)
// Do not call the function like this :
// myArray.forEach(printMe())
/* Output :
Python
Ruby
JavaScript
React */


// Now let's see an interesting thing and that is you can print value, index and whole array togather
myArray.forEach( (item,index,myArray) => {
    // console.log(item,index,myArray); 
} )
/* Output :
Python 0 [ 'Python', 'Ruby', 'JavaScript', 'React' ]
Ruby 1 [ 'Python', 'Ruby', 'JavaScript', 'React' ]
JavaScript 2 [ 'Python', 'Ruby', 'JavaScript', 'React' ]
React 3 [ 'Python', 'Ruby', 'JavaScript', 'React' ] */


let myCoding = [
    {
        languageName : 'JavaScript',
        languageFileName : 'js'
    },
    {
        languageName : 'Python',
        languageFileName : 'py'
    },
    {
        languageName : 'Cascading Style Sheet',
        languageFileName : 'css'
    }
]

myCoding.forEach( (item) => {
    console.log(item);
} )
/* Output :
{ languageName: 'JavaScript', languageFileName: 'js' }
{ languageName: 'Python', languageFileName: 'py' }
{ languageName: 'Cascading Style Sheet', languageFileName: 'css' } */

// This is how you can get value from key
myCoding.forEach( (item) => {
    console.log(item.languageName);
} )
/* Output :
JavaScript
Python
Cascading Style Sheet
 */
myCoding.forEach( (item) => {
    console.log(item.languageFileName);
} )
/* Output :
js
py
css */