'use strict';




const secretNumber = Math.trunc(Math.random()*20) + 1
let score = 20
document.querySelector('.number').textContent = secretNumber

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!'
    } 
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🏆 Correct number!'
    } 
    else if (guess > secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = '📈 Too high!'
            document.querySelector('.score').textContent = score
            score--

        } else {
            document.querySelector('.message').textContent = '😭 You Lost'
            document.querySelector('.score').textContent = 0
        }
    }
    else if (guess < secretNumber) {
        if (score > 0) {
            score--
            document.querySelector('.message').textContent = '📉 Too low!'
            document.querySelector('.score').textContent = score

        } else if (score == 0) {
            document.querySelector('.message').textContent = '😭 You Lost'
            document.querySelector('.score').textContent = 0
        }
    }
    
})