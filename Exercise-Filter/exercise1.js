const num = [1,2,3,4,5,6,7,8,9,10]

/* const newNum = num.map( (item) => {
    return item + 10
})
console.log(newNum); */

const newArr = []

const newNum = num.forEach( (item) => {
    newArr.push( item + 10 )
})
// console.log(newArr);



// Let's see what is chaining

// What is Chaining
    //Javascript Method Chaining allows us to run multiple methods on the same element within a single statement.

let numsArr = num
            .map( (value) => value * 10 )
            .map( (value) => value + 1 )
            .filter( (value) => value > 40 )
console.log(numsArr);
