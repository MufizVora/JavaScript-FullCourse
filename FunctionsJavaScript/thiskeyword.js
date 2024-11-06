const user = {
    username : "Mufiz",
    country : "India",

    welcomeMessage : function(){
        console.log(`Hello! ${this.username}, Welcome to the website`);
        // If you use only this keyword it will print whole object because this keyword refers to the current context and if you write this it will take whole reference of the object and print it
        // Output => 
            // {
            //     username: 'Mufiz',
            //     country: 'India',
            //     welcomeMessage: [Function: welcomeMessage]
            //   }
        console.log(this);
        
    }
}
user.welcomeMessage()
// Output => Hello! Mufiz, Welcome to the website
// This is how you can override username
user.username = "sam"
user.welcomeMessage()
// Output => Hello! sam, Welcome to the website
// Here you will se "{}" output because you have used this keyword outside context so this refers to nothing and it will print blanck object
console.log(this);
// Output => {}
