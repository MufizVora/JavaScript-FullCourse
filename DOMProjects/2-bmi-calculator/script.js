const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height === "" || height <= 0 || isNaN(height)){
        result.innerHTML = `Please Enter a Valid Height`;
    } else if(weight === "" || weight <=0 || isNaN(weight)){
        result.innerHTML = `Please Enter a Valid Weight`
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        // Show the result
        result.innerHTML = `<span>${bmi}</span>`;
        if (bmi < 18.6 || bmi < 0) {
            result.innerHTML = `${bmi}, Which Is Under Weight`;
        }
        if (bmi === 18.6 || bmi > 18.6 || bmi === 24.9 || bmi < 24.9) {
            result.innerHTML = `${bmi}, Which Is Normal Weigth`;
        }
        if (bmi > 24.9) {
            result.innerHTML = `${bmi}, Which Is Over Weight`;
        }
    }
})