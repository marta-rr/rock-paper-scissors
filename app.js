let playerScore=0;
let computerScore=0;
const playerScore_span = document.getElementById('player-score');
const computerScore_span = document.getElementById('computer-score');
const score_div = document.querySelector('.score');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

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
    document.getElementById(userChoice).classList.add('green-effect');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-effect')}, 400);
}

function lose(userChoice, computerChoice){
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice[0].toUpperCase() + userChoice.slice(1) + ' against ' + computerChoice + '. You lost!';
    document.getElementById(userChoice).classList.add('red-effect');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-effect')}, 400);
}

function draw(userChoice, computerChoice){
    result_p.innerHTML = userChoice[0].toUpperCase() + userChoice.slice(1) + ' against ' + computerChoice + '. It is a tie!';
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

$(document).ready(function(){

    showWindow()
    function showWindow(){
        $('#main').show();
        //stop scroll
        $('html body').css('overflow', 'hidden');
        //  close after click
        $('#close-btn').click(function(){
            hideWindow();
            // clearTimeout(stopAutoHide);
        })
            // stopAutoHide = setTimeout(hideWindow,9000000000000);
    }

    function hideWindow(){
        $('#main').hide();
        //on scroll
        $('html body').css('overflow-y', 'visible');
    }

    // //  close after click
    //  $('#close-btn').click(function(){
    //     hideWindow();
    //     // clearTimeout(stopAutoHide);
    //  })
})