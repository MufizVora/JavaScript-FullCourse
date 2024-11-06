// Does JavaScript really have class?

//-> Yes, JavaScript has classes. They were introduced in ECMAScript 2015 (ES6) and provide a syntactical sugar over JavaScript's existing prototype-based inheritance.


// What is called Object?

// -> Collection of properties and methods


// Parts of OOPS

// -> Object literal
// -- Constructor function
// -- Prototype
// -- Classes
// -- Instances (this, new)


// Pillars of OOPS

// -- Abstraction
// -- Encapsulation
// -- Inheritance
// -- Polymorphism


// This is called Object literal
const user = {
    username : 'Mufiz',
    age : '23',
    email : 'mufi@gmail.com',

    getUserDetails : function() {
        console.log(`Username is : ${this.username}`);
    }
}
// console.log(user.getUserDetails());

// this keyword refer the current context of the object
// This is also called Constructor function
function userFunc(username, isLoggedIn, password) {
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.password = password

    return this
}
// console.log(userFunc("Mufiz", true, 123));
/* Output
username: 'Mufiz',
isLoggedIn: true,
password: 123 */

// This will override above values
// console.log(userFunc("Vora", false, 321)); 
/* Output 
username: 'Vora',
isLoggedIn: false,
password: 321 */


// Let's see the use of New keyword and how we can overcome above problem

// console.log(new userFunc("Mufiz", true, 123));
/* Output
username: 'Mufiz',
isLoggedIn: true,
password: 123 */

// This will override above values
// console.log(new userFunc("Vora", false, 321)); 
/* Output 
username: 'Vora',
isLoggedIn: false,
password: 321 */

// => The new keyword in JavaScript is used to create an instance of a user-defined object type or one of the built-in object types that has a constructor function.


// Let's see what is Prototype?

function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function() {
    this.score++
}

createUser.prototype.printMe = function() {
    console.log(`The score of tea is : ${this.score}`);
    
}

const tea = new createUser('Tea', 150)
const coffee = createUser('coffee', 250)

tea.printMe()