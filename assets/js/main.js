/* Globale Variablen */
const resultP = document.querySelector('#score');
const resultText = document.querySelector('#result');
const counterRounds = document.querySelector('#counterRounds');
const numberOfRoundsForm = document.getElementById('formRounds');
const imageYou = document.querySelector('#imageYou');
const imageCom = document.querySelector('#imageCom');
const numRounds = document.querySelector('#numRounds');

let computerChoice = "";
let userChoice = "";
const choices = ['rock', 'paper', 'scissors'];

let userScore = 0;
let computerScore = 0;
let round = 1;

/* Funktionen + lokale Variablen */
const formChoice = document.querySelector('#formChoice').addEventListener("change", getInput = () => {
    const numberOfRounds = parseInt(document.querySelector('input[name="numberOfRounds"]:checked').value);
    
    document.getElementById('hintText').style.display = 'none';
    numberOfRoundsForm.style.display = "none";
    counterRounds.style.display = "block";
    document.querySelector('article').style.display = "grid";
    document.querySelector('#restart').style.display = "block";

    userChoice = document.querySelector('input[name="choice"]:checked').value;
    imageYou.setAttribute ('src', './assets/img/' + userChoice + '.png');
    document.getElementById('userChoice').innerHTML = '"' + userChoice + '"';

    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    imageCom.setAttribute ('src', './assets/img/' + computerChoice + '.png');
    document.getElementById('computerChoice').innerHTML = '"' + computerChoice + '"';

    const result = getResult(userChoice, computerChoice);
    resultText.innerHTML = result;

    (result === 'You win') ? userScore++ : (result === 'You lose') ? computerScore++ : (result === 'Draw') ? "" : "";

    counterRounds.innerHTML = `${round} out of ${numberOfRounds}`;
    resultP.innerHTML = `${userScore}${computerScore}`;

    (round === numberOfRounds) ? displayWinner() : round++;
});

function displayWinner() {
    (userScore > computerScore) ? (counterRounds.innerHTML = 'You win the game!', numRounds.innerHTML = '') : (userScore < computerScore) ? (counterRounds.innerHTML = 'Computer wins the game!', numRounds.innerHTML = '') : (counterRounds.innerHTML = 'The game is a draw!', numRounds.innerHTML = '');

    userScore = 0;
    computerScore = 0;
    round = 1;
    document.getElementById('formChoice').style.display = "none";
    document.getElementById('restart').classList.remove('d-none');
    document.getElementById('restart').classList.add('d-inline');
}


function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        document.querySelector('input[name="choice"]:checked').checked = false;
        return 'Draw';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        document.querySelector('input[name="choice"]:checked').checked = false;
        return 'You win';
    } else {
        document.querySelector('input[name="choice"]:checked').checked = false;
        return 'You lose';
    }
}