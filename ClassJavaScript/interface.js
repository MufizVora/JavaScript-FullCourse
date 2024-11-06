class user{
    constructor(username){
        this.username = username;
    };

    logMe(){
        console.log(`Username is : ${this.username}`);
    };
};

class Tutor extends user{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    };

    addCourse(){
        console.log(`This course is added by ${this.username}`);
    };
};

const child = new Tutor("Mufiz", "mufi@gmail.com", "mufi123");
child.addCourse();

const parent = new user("Mufi");
parent.logMe();

console.log(child instanceof Tutor);


