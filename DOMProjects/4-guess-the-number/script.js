let randomNumber = parseInt(Math.random() * 100 + 1);

let userGuess = document.querySelector('#userGuessBox')
let userSubmit = document.querySelector('#submit')
let userPreviousGuesses = document.querySelector('.guesses')
let userRemainingAttempts = document.querySelector('.remainingAttempts')
let guessHighOrLow = document.querySelector('.guessLowOrHigh')
let startOver = document.querySelector('.resultParagraphs')

const p = document.createElement('p');

let previousUserGuesses = []
let userAttempts = 1

let playgame = true;

if (playgame) {
    userSubmit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userGuess.value)
        guessValidation(guess)
    });
}

// This function will apply validation on user guess
function guessValidation(guess) {
    if(isNaN(guess)) {
        alert('Please enter a valid number!')
    } else if(guess < 1) {
        alert('Please enter a number greater than 1')
    } else if(guess > 100){
        alert('Please enter a number less than 100')
    } else {
        previousUserGuesses.push(guess)
        if(userAttempts === 11){
            displayUserGuess(guess);
            displayMessage(`Game Over, Random number was ${randomNumber}`);
            endGame();
        } else {
            displayUserGuess(guess);
            compareGuess(guess);
        }
    }
}

// This function will comapre user's guess with random guess
function compareGuess(guess) {
    if(guess === randomNumber){
        displayMessage(`Congratulations, you won! The random number was ${randomNumber}`);
        endGame();
    } else if(guess < randomNumber){
        displayMessage('Too low, try again');
    } else if(guess > randomNumber){
        displayMessage('Too high, try again');
    }
}

// This function will display user's guess
function displayUserGuess(guess) {
    userGuess.value = '';
    userPreviousGuesses.innerHTML += `${guess}, `;
    userAttempts++;
    userRemainingAttempts.innerHTML = `${11 - userAttempts}`;
}

// This function will display messages 
function displayMessage(message) {
    guessHighOrLow.innerHTML = `<h2>${message}</h2>`;
}

// This function will end the game for user
function endGame() {
    userGuess.value = '';
    userGuess.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id='playAgain'>Play Again</h2>`;
    startOver.appendChild(p);;    
    playgame = false;
    playAgain();
}

// This function will start the game again for user
function playAgain() {
    const playAgainButton = document.querySelector('#playAgain');
    playAgainButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        previousUserGuesses = [];
        userAttempts = 1;
        userPreviousGuesses.innerHTML = '';
        userRemainingAttempts.innerHTML = `${11 - userAttempts}`;
        userGuess.removeAttribute('disabled');
        startOver.removeChild(p);
        playgame = true;
    })
}