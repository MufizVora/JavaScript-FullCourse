document.querySelector('#images').addEventListener('click', function(e) {
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG')
    {
        let removeImage = e.target.parentNode
        removeImage.remove()
        console.log(e.target.id);
    }    
}, false)