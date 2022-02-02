let playerScore=0;
let computerScore=0;
let desiredRounds=0;
let currentRound=1;
const playerScore_span = document.getElementById('player-score');
const computerScore_span = document.getElementById('computer-score');
const score_div = document.querySelector('.score');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const reset_button = document.getElementById('reset');

function getComputerChoice (computerChoice){
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

function win(userChoice, computerChoice){
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice[0].toUpperCase() + userChoice.slice(1) + ' against ' + computerChoice + '. You win!';
    console.log(`Round: ${currentRound}, Computer Score: ${computerScore}, Player Score: ${playerScore}. You win!!!`);
    document.getElementById(userChoice).classList.add('green-effect');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-effect')}, 400);
}

function lose(userChoice, computerChoice){
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice[0].toUpperCase() + userChoice.slice(1) + ' against ' + computerChoice + '. You lost!';
    console.log(`Round: ${currentRound},  Computer Score: ${computerScore},  Player Score: ${playerScore}. Computer wins!`);
    document.getElementById(userChoice).classList.add('red-effect');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-effect')}, 400);
}

function draw(userChoice, computerChoice){
    result_p.innerHTML = userChoice[0].toUpperCase() + userChoice.slice(1) + ' against ' + computerChoice + '. It is a tie!';
     console.log(`Round: ${currentRound},  Computer Score: ${computerScore},  Player Score: ${playerScore}. It is a tie!`);
    document.getElementById(userChoice).classList.add('gray-effect');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-effect')}, 400);
}

function game (userChoice){
    const computerChoice =  getComputerChoice();
    switch (userChoice + computerChoice){
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice, computerChoice);
            break;
}
}

function playGame(){
    let roundChoice= 0;
    while (roundChoice != 1 && roundChoice != 3) {
        roundChoice = prompt('Welcome to Rock, Paper, Scissors!\nWould you like to play 1 round or best of 3?\nChoose 1 or 3!');
        if (roundChoice != 1 && roundChoice != 3){
            alert('You must confirm 1 or 3.  Try again, please.');
        }
    }
    return roundChoice;
}

window.onload = function main() {
    // Get user input
    desiredRounds = playGame();
    rock_div.addEventListener('click', function(){
        gameManager('rock');
    })

    paper_div.addEventListener('click', function(){
        gameManager('paper');
    })

    scissors_div.addEventListener('click', function(){
        gameManager('scissors');
    })
}

function gameManager(userChoice){

    if(desiredRounds == 3 && (computerScore < 2 && playerScore < 2)){
        game(userChoice);
        currentRound++;
    }

    else if(desiredRounds == 1 && (playerScore < 1  && computerScore < 1)){
        game(userChoice);
        currentRound++;
    }
    endGame();
}

function endGame(){
    if(desiredRounds == 3 && computerScore == 2){
            result_p.innerHTML =(`Computer Score: ${computerScore},  Player Score: ${playerScore}. Computer wins the game. Sorry!`);
            console.log(`Computer Score: ${computerScore},  Player Score: ${playerScore}.\nComputer wins the game. Sorry!`);
    }
    else if(desiredRounds == 3 && playerScore == 2){
            result_p.innerHTML = (`Computer Score: ${computerScore},  Player Score: ${playerScore}. You win the game!!! Congrats!!!`);
            console.log(`Computer Score: ${computerScore},  Player Score: ${playerScore}.\nYou win the game!!! Congrats!!!`);
    }
    else if(desiredRounds == 1 && playerScore == 1){
            result_p.innerHTML = (`Computer Score: ${computerScore},  Player Score: ${playerScore}. You win the game!!! Congrats!!!`);
            console.log(`Computer Score: ${computerScore},  Player Score: ${playerScore}.\nYou win the game!!! Congrats!!!`);
    }
    else if(desiredRounds == 1 && computerScore == 1){
            result_p.innerHTML = (`Computer Score: ${computerScore},  Player Score: ${playerScore}. Computer wins the game. Sorry!`);
            console.log(`Computer Score: ${computerScore},  Player Score: ${playerScore}.\nComputer wins the game. Sorry!`);
    }
}


function reStartGame(){
  // reset to 0
  playerScore = 0;
  computerScore = 0;
  currentRound= 1;

  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;

  result_p.innerHTML = `Ready? Your move!`;

  desiredRounds = playGame();
}

