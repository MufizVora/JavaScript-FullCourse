class user {
    constructor(username){
        this.username = username;
    };

    logMe(){
        console.log(`Username is : ${this.username}`);
    };

    static uniqueId(){
        this.id = Math.floor(Math.random() * 1000000 + 1);
        console.log(this.id);
    };
};
/* uniquesId() method can be access like this if it's static method
user.uniqueId();
 */


const mufiz = new user('Mufiz');
// mufiz.uniqueId();


class Tutor extends user {
    constructor(username, email){
        super(username)
        this.email = email;
    };
};
/* uniquesId() method can be access like this if it's static method
Tutor.uniqueId();
 */

const mufi = new Tutor("Mufi", "mufi@gmail.com");
// mufi.uniqueId();