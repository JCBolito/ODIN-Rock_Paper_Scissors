//randomly returns either rock, paper, or scissors
function computerPlay() {
    let select = ['ROCK', 'PAPER', 'SCISSORS'];
    return select[Math.floor(Math.random() * select.length)];
}
function win() {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);
}

function lose() {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
}

function draw() {
    console.log(`Draw! You both picked ${computerSelection}!`);
}

//plays a single round of RPS
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'ROCK') {
        if (computerSelection == 'SCISSORS') {
            win();
            return 1;
        }
        else if (computerSelection == 'PAPER') {
            lose();
            return 2;
        }
        else {
            draw();
            return 3;
        }
    }

    else if (playerSelection == 'PAPER') {
        if (computerSelection == 'ROCK') {
            win();
            return 1;
        }
        else if (computerSelection == 'SCISSORS') {
            lose();
            return 2;
        }
        else {
            draw();
            return 3;
        }
    }

    else if (playerSelection == 'SCISSORS') {
        if (computerSelection == 'PAPER') {
            win();
            return 1;
        }
        else if (computerSelection == 'ROCK') {
            lose();
            return 2;
        }
        else {
            draw();
            return 3;
        }
    }
    else
        alert(`"${playerSelection}" is not a valid option.`);
}

function game() {
    let wins = 0;
    let losses = 0;
    let draws = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound(playerSelection, computerSelection);
        if (result == 1)
            wins += 1;
        else if (result == 2)
            losses += 1;
        else if (result == 3)
            draws += 1;
        console.log(`WINS: ${wins} | LOSSES: ${losses} | DRAWS: ${draws}"`);
        if (i < 4) {
            playerSelection = prompt("ROCK, PAPER, SCISSORS?").toUpperCase();
            computerSelection = computerPlay();
        }
    }
    if (wins > losses)
        console.log("YOU WON THE GAME!!!");
    else if (wins < losses)
        console.log("YOU LOST THE GAME!!!");
    else
        console.log("IT'S A DRAW!!!");
}
//player selection
let playerSelection = prompt("ROCK, PAPER, SCISSORS?").toUpperCase();
let computerSelection = computerPlay();
game();