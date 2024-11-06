let myNums = [1,2,3,4,5,6,7,8,9,10]

myNums.filter( (item) => {
    // console.log(item);
} )
/* Output :
1
2
3
4
5
6
7
8
9
10 */

// Let's apply some conditions in arrow function using fillter
let newNums = myNums.filter( (num) => num > 5 )
// console.log(newNums);
// Output : [ 6, 7, 8, 9, 10 ]


// Another way to do the same thing
// If you open a scope you must use retrun keyword
let newNumbers = myNums.filter( (num) => {
    return num > 5
} )
// console.log(newNumbers)
// Output : [ 6, 7, 8, 9, 10 ]



// Let's do the same task using forEach loop
// In this task we would be filtering our condition using forEach loop then we would add those values in new empty array
const updArray = []

myNums.forEach( (num) => {
    if (num > 5) {
        updArray.push(num)
    }
} )
// console.log(updArray);
