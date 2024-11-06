// This is how you get and set values in class

class user {
    constructor(email, password){
        this.email = email;
        this.password = password;        
    };

    get email(){
        return this._email;
    };

    set email(value){
        this._email = value.toUpperCase();
    };
};

const mufi = new user('mufiz@gmail.com', '123');
console.log(mufi._email);
// Output => MUFIZ@GMAIL.COM


// Let's see how we use getter and setter in function

function newUser(email, password) {
    this._email = email;
    this._password = password;
    
    Object.defineProperty(this, "password", {
        get: function () {
            return `${this._password}reigns`;
        },
        set: function (value) {
            this._password = value;
        }
    });
};

const roman = new newUser('roman@fb.com', "romAn4236");
console.log(roman.password);
// Output => romAn4236reigns

// Let's see how we use getter and setter in object

const objUser = {
    _email: 'mufi@gmail.com',
    _password: '123',

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    },
};

console.log(objUser.email);
// Output => MUFI@GMAIL.COM