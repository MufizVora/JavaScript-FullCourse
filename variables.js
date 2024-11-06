const accountId = 1329
let accountEmail = "mufiz@goodle.com"
var accountPassword = "12345"
accountCity = "Ahmedabad"
let accountState;

// accountId = 2 Not allowed to reassign value to type const

accountEmail = "mv@google.com"

accountPassword = "12"

accountCity = "Jaipur"

console.log(accountId)

/*
Prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])