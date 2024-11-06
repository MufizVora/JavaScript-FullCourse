// Let's see how promise is created

const promiseOne = new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log("Asynchronous task1 is completed");
        resolve();
    }, 2000);
});
promiseOne.then(function () {
    console.log("Promise Consumed");
});

// Let's create promise with another way

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Asynchronous task 2 is completed");
        resolve()
    }, 2000);
}).then(function () {
    console.log("Asynchronous task 2 is resolved");
});


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({username : 'Mufiz', email : 'mufiz@gmail.com'})
    }, 2000)
})
promiseThree.then(function (user) {
    console.log(user);
    
})

// Let's see then chain and catch
// In this example we will see how to use chainning in promise

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username : 'Mufiz', email : 'mufiz@gmail.com'});            
        } else{
            reject('ERROR : something went wrong')
        }
    }, 2000);
});

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log('The promise is either resolved or rejected');
});


// Let's handle resolve and reject with async and await


const promiseFive = new Promise((resolve, reject)=> {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username : 'JavaScript', email : 'js@js.com'})
        } else{
            reject('ERROR : JS went wrong')
        }
    }, 2000);
})

async function cosumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}
cosumePromiseFive();


// Let's fetch API data with async and await

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
}
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})
