class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    };
    encryptPassword(){
        return `${this.password}abc34@4dsr`; 
    };
    upperUsername(){
        return `${this.username.toUpperCase()}`;
    };
};

const user = new User("Mufiz", "mufiz@gmail.com", "123");
console.log(user.encryptPassword());
console.log(user.upperUsername());

// Let's do the same thing without using class

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
};

User.prototype.encryptPassword = function() {
    return `${this.password}abd@@dmd1`;
};

User.prototype.upperUsername = function(){
    return`${this.username.toUpperCase()}`;
};

const mufiz = new User("Mufiz","mufiz@gmail.com","123");
console.log(mufiz.encryptPassword());
console.log(mufiz.upperUsername());