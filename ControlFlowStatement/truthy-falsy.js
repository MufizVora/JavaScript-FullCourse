// Let's see which are truthy and falsy values

// What is called falsy value?
    // A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.


// Falsy values
// flase, 0, -0, Bigint 0n, "", null, undefined, NaN

const val = false

if (val)
{
    console.log(`${val} is not a falsy value`)
}
else
{
    console.log(`${val} is falsy value`);
}


// Truthy values
// rest of all are truthy values
// "0", "false", " ", [], {}, function(){}