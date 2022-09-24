'use strict';




let secretNumber = Math.trunc(Math.random()*20) + 1
let score = 20
let highScore = 0

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message
}

function displayNumber() {
    const numberValue = document.querySelector('.number')
    return numberValue
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    //If there is not Input
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔ No number!'
        displayMessage('⛔ No number!')
    } 

    // If the guess is correct
    else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🏆 Correct number!'
        displayMessage('🏆 Correct number!')

        document.querySelector('body').style.backgroundColor = '#60b347'

        // document.querySelector('.number').style.width = '30rem'
        displayNumber().style.width = '30rem'

        // document.querySelector('.number').textContent = secretNumber
        displayNumber().textContent = secretNumber

        if (score > highScore) { 
        highScore = score
        document.querySelector('.highscore').textContent = highScore
        }
    } 

    // If the guess is wrong
    else if (guess !== secretNumber) {
        // document.querySelector('.message').textContent = 
        // guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!')
        score--
        document.querySelector('.score').textContent = score

        if (score < 1) {
            // document.querySelector('.message').textContent = '😭 You Lost'
            displayMessage('😭 You Lost')
            document.querySelector('.score').textContent = 0
            document.querySelector('body').style.backgroundColor = '#D2001A'
        }
    } 


    // // If guess is too high
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too high!'
    //         score--
    //         document.querySelector('.score').textContent = score

    //     } else {
    //         document.querySelector('.message').textContent = '😭 You Lost'
    //         document.querySelector('.score').textContent = 0
    //     }
    // }

    // // If guess is too low
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too low!'
    //         score--
    //         document.querySelector('.score').textContent = score

    //     } else {
    //         document.querySelector('.message').textContent = '😭 You Lost'
    //         document.querySelector('.score').textContent = 0
    //     }
    // }
    
})

document.querySelector('.again').addEventListener('click', function (){
    score = 20
    secretNumber = Math.trunc(Math.random()*20) + 1

    // document.querySelector('.message').textContent = 'Start guessing...'
    displayMessage('Start guessing...')
    // document.querySelector('.number').style.width = '15rem'
    displayNumber().style.width = '15rem'
    // document.querySelector('.number').textContent = '?'
    displayNumber().textContent = '?'
    document.querySelector('.score').textContent = score
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222'
    
})