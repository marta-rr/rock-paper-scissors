const playerScore=0;
const computerScore=0;
const playerScore_span = document.getElementById('player-score');
const computerScore_span = document.getElementById('computer-score');
const score_div = document.querySelector('.score');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function getComputerChoice (computerChoice){
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}


function game (userChoice){
    const computerChoice =  getComputerChoice();
    switch (userChoice + computerChoice){
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            console.log('User wins');
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            console.log('User looses');
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            console.log('It is a draw');
            break;
}
}

function main() {
    rock_div.addEventListener('click', function(){
        game('rock');
    })

    paper_div.addEventListener('click', function(){
        game('paper');
    })

    scissors_div.addEventListener('click', function(){
        game('scissors');
    })
}

main();
