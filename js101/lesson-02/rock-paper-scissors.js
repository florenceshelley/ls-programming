/**
 * Rock Paper Scissors
 * @author Florence Shelley
 *
 * Rock Paper Scissors is a simple game played between two opponents.
 * Both the opponents choose an item from rock, paper, and scissors.
 * The winner is decided according to the following rules:
 *
 * 1. If player A chooses rock and player B chooses scissors, player A wins.
 * 2. If player A chooses paper and player B chooses rock, player A wins.
 * 3. If player A chooses scissors and player B chooses paper, player A wins.
 * 4. If both players choose the same item, neither players wins. It's a tie.
 *
 * This version of the game lets the user play against the computer.
 * The game flow should go like this:
 *
 * 1. The user makes a choice.
 * 2. The computer makes a choice.
 * 3. The winner is displayed.
 *
 * @summary A user vs. computer game of Rock Paper Scissors
 * 
 * @todo Decompose and refactor for readability
 */

const { question } = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors'];

// Prompt line
const prompt = message => {
	console.log(`=> ${message}`);
};

while (true) {
	prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
	let choice = question();
	
	while(!VALID_CHOICES.includes(choice)) {
		prompt(`That's not a valid choice, please choose again`);
		choice = question();
	}
	
	let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
	let computerChoice = VALID_CHOICES[randomIndex];
	
	prompt(`You chose ${choice}, computer chose ${computerChoice}`);
	
	if ((choice === 'rock' && computerChoice === 'scissors') ||
		(choice === 'scissors' && computerChoice === 'paper') ||
		(choice === 'paper' && computerChoice === 'rock')) {
			prompt('You win, huzzah!');
	} else if ((choice === 'rock' && computerChoice === 'paper') ||
		(choice === 'scissors' && computerChoice === 'rock') ||
		(choice === 'paper' && computerChoice === 'scissors')) {
			prompt('You lose, womp womp...');
	} else {
		prompt(`It's a draw.`);
	}

	prompt('Do you want to play again (y/n)?');
	let answer = question().toLowerCase();
	while (answer[0] !== 'n' && answer[0] !== 'y') {
		prompt(`Please enter 'y' or 'n'`);
		answer = question().toLocaleLowerCase();
	}

	if (answer !== 'y') break;
}
