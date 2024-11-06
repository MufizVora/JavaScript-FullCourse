const books = [
    { title : 'BookOne', genre : 'Fiction', publish : '1981', 
        edition : '2002' },
    { title : 'BookTwo', genre : 'Non-Fiction', publish : '1991', 
        edition : '2006' },
    { title : 'BookThree', genre : 'Science', publish : '2001', 
        edition : '2015' },
    { title : 'BookFour', genre : 'Comedy', publish : '2000', 
        edition : '2009' },
    { title : 'BookFive', genre : 'History', publish : '1999', 
        edition : '2010' },
    { title : 'BookSix', genre : 'Fiction', publish : '2009', 
        edition : '2018' },
    { title : 'BookSeven', genre : 'Non-Fiction', publish : '2013', 
        edition : '2020' },
    { title : 'BookEight', genre : 'Science', publish : '2005', 
        edition : '2013' },
    { title : 'BookNine', genre : 'Comedy', publish : '2021', 
        edition : '2024' },
    { title : 'BookTen', genre : 'History', publish : '2000', 
        edition : '2020' },
]

// Filter by genre

// const userBooks = books.filter( (value) => {
//     if (value.genre == "History") {
//         return value
//     }
// } )
// console.log(userBooks);

// Filter by publish year after 2000

const userBooks = books.filter( (value) => {
    if (value.publish >= 2000 && value.genre == 'History') {
        return value
    }
} ) 
console.log(userBooks);

/* books.forEach( (value) => {
    if (value.publish >= 2000 && value.genre === 'History')      
    console.log(value.genre); 
} ) */