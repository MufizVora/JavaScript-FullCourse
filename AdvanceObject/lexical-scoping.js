// This is called laxical scoping

function outter() {
    let username = "Mufiz";
    //console.log(innerUsername); This is not accessed ReferenceError: innerUsername is not defined because it's inside inner() 
    //console.log(innerTwoUsername);This is not accessed ReferenceError: innerTwoUsername is not defined because it's inside innerTwo() 

    function inner() {
        let innerUsername = "innerMufiz";
        console.log(username); // This is accessed        
    };

    function innerTwo() {
        let innerTwoUsername = "innerTwoMufiz";
        console.log(username); // This is accessed
    };
    inner();
    innerTwo();
};
outter();