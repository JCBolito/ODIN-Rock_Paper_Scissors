//randomly returns either rock, paper, or scissors
function computerPlay() {
	let select = ['ROCK', 'PAPER', 'SCISSORS'];
	return select[Math.floor(Math.random() * select.length)];
}
/* logs if you win a round */
function win() {
	return `You Win! ${playerSelection} beats ${computerSelection}!`;
}

/* logs if you lose a round */
function lose() {
	return `You Lose! ${computerSelection} beats ${playerSelection}!`;
}

/* logs if the round is a draw */
function draw() {
	return `Draw! You both picked ${computerSelection}!`;
}

//plays a single round of RPS
function playRound(playerSelection, computerSelection) {
	/* play rock conditions */
	if (playerSelection == computerSelection)
		return draw();
	else if (playerSelection == 'ROCK') {
		if (computerSelection == 'SCISSORS')
			return win();
		else
			return lose();
	}
	else if (playerSelection == 'PAPER') {
		if (computerSelection == 'ROCK')
			return win();
		else
			return lose();
	}
	else if (playerSelection == 'SCISSORS') {
		if (computerSelection == 'PAPER')
			return win();
		else
			return lose();
	}
}

function round(button) {
	if (player < 5 && computer < 5) {
		playerSelection = button.id;
		computerSelection = computerPlay();
		visuals.textContent = playRound(playerSelection, computerSelection);
	}

	if (visuals.textContent == win()) {
		player += 1;
		playerScore.textContent = `PLAYER: ${player}`;
		visuals.classList.add('win');
		visuals.classList.remove('lose');
	}
	else if (visuals.textContent == lose()) {
		computer += 1;
		computerScore.textContent = `COMPUTER: ${computer}`;
		visuals.classList.add('lose');
		visuals.classList.remove('win');
	}
	else if (visuals.textContent == draw()) {
		visuals.classList.remove('win');
		visuals.classList.remove('lose');
	}

	if (player == 5 || computer == 5) {
		if (player == 5) {
			visuals.textContent = '🎉GAME OVER! YOU WIN!🎉';
			visuals.classList.add('win');
			visuals.classList.remove('lose');
			restart.style.display = 'flex';

		}
		else if (computer == 5) {
			visuals.textContent = '😥GAME OVER! YOU LOST!😥';
			visuals.classList.add('lose');
			visuals.classList.remove('win');
			restart.style.display = 'flex';
		}
	}
}


/* button clicked */
let playerSelection;
let computerSelection;
let player = 0;
let computer = 0;
const visuals = document.querySelector('.visuals');
const buttons = document.querySelectorAll('.choice');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const restart = document.querySelector('.res-container');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		round(button);
	});
	restart.addEventListener('click', () => {
		round(button);
		player = 0;
		computer = 0;
		playerScore.textContent = `PLAYER: ${player}`;
		computerScore.textContent = `COMPUTER: ${computer}`;
		visuals.textContent = 'ROCK, PAPER, SCISSORS! SHOOT!'
		visuals.classList.remove('lose');
		visuals.classList.remove('win');
		restart.style.display = 'none';

	});
});





//initial player selection

