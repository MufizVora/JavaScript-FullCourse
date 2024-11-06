function loginUserMessage(username = "John") { // Here, we have passed default value in parameter so if there is nothing in argument, by default "John" name will be printed cause it's a default parameter.
    // If condition to show error message to user if username is undefined
    if(username === undefined){
        console.log("Please enter your username");
        return
    }
    console.log(`${username}, Just logged in`);
    
}
// If you leave your function's argument blank, it will print undefined, cause you have not defined any value in your function's argument
loginUserMessage();
// Output => undefined, Just logged in
// If you pass argument in your function, you will get your desired output
loginUserMessage("Mufiz")
// Output => Mufiz, Just logged in


// Let's see how an object is passed in function and how it is used
const users = {
    name : "Smith",
    country : "Australia",
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.name} and country is ${anyobject.country}`);
    return
}

handleObject(users)

// Let's see how an array is passed in function and how it is used
const numberArray = [10,20,30,40,50]

function returnSecondValue(getvalue) {
    console.log(`The returned value is:`, getvalue[2]);
    return
}

returnSecondValue(numberArray)