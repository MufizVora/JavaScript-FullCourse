const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( (button) => {
    button.addEventListener('click', (e) => {
/*         if(e.target.id === 'gray'){
            body.style.backgroundColor = 'gray'
        }
        if(e.target.id === 'white') {
            body.style.backgroundColor = 'white'
        } 
        if(e.target.id === 'blue') {
            body.style.backgroundColor = 'blue'
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow'
        } */
       switch (e.target.id) {
        case 'gray':
            body.style.backgroundColor = e.target.id
            break;    
        case 'white':
            body.style.backgroundColor = e.target.id
            break;    
        case 'blue':
            body.style.backgroundColor = e.target.id
            break;    
        case 'yellow':
            body.style.backgroundColor = e.target.id
            break;    
        default:
            break;
       }
    })
})