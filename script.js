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
    /* play paper conditions */
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
    /* play scissors conditions */
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
    /* draw conditions */
    else
        alert(`"${playerSelection}" is not a valid option.`);
}

/* runs the whole game */
function game() {
    /* counts game points */
    let wins = 0;
    let losses = 0;
    let draws = 0;
    /* plays 5 rounds */
    for (let i = 0; i < 5; i++) {
        /* playRound returns a number depending on the round result */
        let result = playRound(playerSelection, computerSelection);
        /* increment to game points */
        if (result == 1)
            wins += 1;
        else if (result == 2)
            losses += 1;
        else if (result == 3)
            draws += 1;
        /* logs current points in the round */
        console.log(`WINS: ${wins} | LOSSES: ${losses} | DRAWS: ${draws}"`);
        /* player selection after initial selection */
        /* i < 4 as initial selection is reducted from the iteration */
        if (i < 4) {
            playerSelection = prompt("ROCK, PAPER, SCISSORS?").toUpperCase();
            computerSelection = computerPlay();
        }
    }
    /* logs if you win/lost or game is draw after all 5 rounds */
    if (wins > losses)
        console.log("YOU WON THE GAME!!!");
    else if (wins < losses)
        console.log("YOU LOST THE GAME!!!");
    else
        console.log("IT'S A DRAW!!!");
}
//initial player selection
let playerSelection = prompt("ROCK, PAPER, SCISSORS?").toUpperCase();
let computerSelection = computerPlay();
game();