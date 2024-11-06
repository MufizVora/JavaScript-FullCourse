// Let's see Nested Functions and how variables are declared and accessed in nested functions

function one(){
    const username = "Mufiz"

    function two(){
        const country = "India"
        console.log(username)
    }    
    //console.log(country) 
    // Error : country is not defined => because counrty is defined inside two named function and you are trying to acces it outside scope of function two.

    two()
}
one()