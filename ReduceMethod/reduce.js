const nums = [1,2,3,4]

/* const totalNums = nums.reduce( function (acc,currentValue){
    console.log(`Accumulator : ${acc} And CurrentValue : ${currentValue}`);
    
    return acc + currentValue
}, 0)
console.log(totalNums); */


// Let's use arrow function

/* const totalNums = nums.reduce( (acc, currentValue) => {
    return acc + currentValue
}, 0)
console.log(totalNums); */


const shoppingCart = [
    {coursename : 'C',
     courseprice : 4999,   
    },
    {coursename : 'C++',
     courseprice : 5999,   
    },
    {coursename : 'Python',
     courseprice : 3999,   
    },
    {coursename : 'JavaScript',
     courseprice : 2999,   
    },
    {coursename : 'React',
     courseprice : 4999,   
    },
]

const priceToPay = shoppingCart.reduce ( (acc,item) => acc + item.courseprice, 0)
console.log(priceToPay);
// Output : 22995