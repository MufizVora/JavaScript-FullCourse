function setUserName(username) {
    this.username = username
}

function createUser(username, email, password) {
    setUserName.call(this, username)
    this.email = email
    this.password = password
}

const mufiz = new createUser("Mufiz","mufiz@gmail.com","mufiz123")
console.log(mufiz);