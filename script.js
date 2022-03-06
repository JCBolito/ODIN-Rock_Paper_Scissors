//randomly returns either rock, paper, or scissors
function computerPlay() {
    let select = ['ROCK', 'PAPER', 'SCISSORS'];
    return select[Math.floor(Math.random() * select.length)];
}

//plays a single round of RPS
function playRound(playerSelection, computerSelection) {
    //R>S
    //P<S
    //S<R
    //ROCK
}

//player selection
let playerSelection = prompt("ROCK, PAPER, SCISSORS?");
let computerSelection = computerPlay();