// Let's see how JavaScript execute the code

// Types of execution context
    // 1. Global Execution Context (GEC)
    // 2. Functional Execution Context (FEC)
    // 3. Eval Execution Context (EEC)

// 1. Global Execution Context (GEC)
// It consists two main components

// 1. Memory Creation Phase (MCP) / Creation Phase (CP)
// 2. Execution Phase (EP)

// Let's understand JavaScript Execution Context with example

let val1 = 10
let val2 = 5

function addNum (num1, num2) {
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10,2)

// Step1 : GEC (Global Execution Context)
    // Firstly, it is allowed to this keyword

// Step2 : MCP (Memory Creation Phase)
    // val1 -> undefined (line 16)
    // val2 -> undefined (line 17)
    // addNum -> defination (line 19 to line 22)
    // result1 -> undefined
    // result2 -> undefined

// Step3 : EP (Execution Phase)
    // val1 -> 10 (line 16)
    // val2 -> 5 (line 17)
    // addNum -> it's a function so, it will create a new execution context everytime a function is executed
    // result1 -> 15
    // result2 -> 12

// Step 1 : MCP (Memory Creation Phase) For Particular Function
// This time we will do task for below function 

/* function addNum (num1, num2) {
    let total = num1 + num2
    return total
} */


// val1 -> undefined
// val2 -> undefined
// total -> undefined    

// Step 2 : EP (Execution Phase) For Particular Function
// This time we will do task for below function 

/* function addNum (num1, num2) {
    let total = num1 + num2
    return total
} */

/* let result1 = addNum(val1, val2) (line 23)
 */

// num1 -> 10
// num2 -> 5
// total -> 15 Note : This total will be returned to the GEF (Global Execution Context)

// Step 1 : MCP (Memory Creation Phase) For Particular Function
// This time we will do task for below function 

/* function addNum (num1, num2) {
    let total = num1 + num2
    return total
} */


// val1 -> undefined
// val2 -> undefined
// total -> undefined 

// Step 2 : EP (Execution Phase) For Particular Function
// This time we will do task for below function 

/* function addNum (num1, num2) {
    let total = num1 + num2
    return total
} */

/* let result2 = addNum(10, 2) (line 24)
 */

// num1 -> 10
// num2 -> 2
// total -> 12 Note : This total will be returned to the GEF (Global Execution Context)