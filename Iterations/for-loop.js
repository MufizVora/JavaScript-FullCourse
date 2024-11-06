// Let's see for loop with an example


// This is how for loop is used and declared
for (let num = 0; num < 10; num++) {
    const element = num;
    console.log(element);
    
}



// Example of outer and inner loop
for (let i = 0; i < 3; i++) {  // Outer loop
    console.log('Outer loop iteration:', i);
    for (let j = 0; j < 2; j++) {  // Inner loop
        console.log('  Inner loop iteration:', j);
    }
}

// Let's see how we can iterate an array through the help of for loop

let myArray = ["A","B","C","D","E","F"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}