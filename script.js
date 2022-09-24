'use strict';




let secretNumber = Math.trunc(Math.random()*20) + 1
let score = 20
let highScore = 0

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    //If there is not Input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!'
    } 

    // If the guess is correct
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🏆 Correct number!'

        document.querySelector('body').style.backgroundColor = '#60b347'

        document.querySelector('.number').style.width = '30rem'

        document.querySelector('.number').textContent = secretNumber

        if (score > highScore) { 
        highScore = score
        document.querySelector('.highscore').textContent = highScore
        }
    } 

    // If guess is too high
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too high!'
            score--
            document.querySelector('.score').textContent = score

        } else {
            document.querySelector('.message').textContent = '😭 You Lost'
            document.querySelector('.score').textContent = 0
        }
    }

    // If guess is too low
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too low!'
            score--
            document.querySelector('.score').textContent = score

        } else {
            document.querySelector('.message').textContent = '😭 You Lost'
            document.querySelector('.score').textContent = 0
        }
    }
    
})

document.querySelector('.again').addEventListener('click', function (){
    score = 20
    secretNumber = Math.trunc(Math.random()*20) + 1
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score
    document.querySelector('.guess').value = ''
    
})