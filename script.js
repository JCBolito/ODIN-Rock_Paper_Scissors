//randomly returns either rock, paper, or scissors
function computerPlay() {
    let select = ['ROCK', 'PAPER', 'SCISSORS'];
    return select[Math.floor(Math.random() * select.length)];
}

/* logs if you win a round */
function win() {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);
}

/* logs if you lose a round */
function lose() {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
}

/* logs if the round is a draw */
function draw() {
    console.log(`Draw! You both picked ${computerSelection}!`);
}

//plays a single round of RPS
function playRound(playerSelection, computerSelection) {
    /* play rock conditions */
    if (playerSelection == computerSelection)
        draw();
    else if (playerSelection == 'ROCK') {
        if (computerSelection == 'SCISSORS')
            win();
        else
            lose();
    }
    else if (playerSelection == 'PAPER') {
        if (computerSelection == 'ROCK')
            win();
        else
            lose();
    }
    else if (playerSelection == 'SCISSORS') {
        if (computerSelection == 'PAPER')
            win();
        else
            lose();
    }

}

/* button clicked */
let playerSelection;
let computerSelection;
const buttons = document.querySelectorAll('.choice');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    })
})

//initial player selection

