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
 * @todo Add "Shortened Input" feature
 * @todo Add "Best of 5" feature (nts: use recursion for this)
 */

const { question } = require('readline-sync');

// Constants
const OPTIONS = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const DECISIONS = ['y', 'n'];
const WINNING_COMBINATIONS = {
	rock: ['scissors', 'lizard'],
	paper: ['rock', 'spock'],
	scissors: ['paper', 'lizard'],
	lizard: ['paper', 'spock'],
	spock:['rock', 'scissors']
};

// Prompt line
const prompt = message => {
	console.log(`=> ${message}`);
};

const displayWelcome = () => {
	console.clear();
	prompt('Welcome to Bonus Rock Paper Scissors!');
};

const displayWinner = (userSelection, computerSelection) => {
	const userSelectionWins = WINNING_COMBINATIONS[userSelection].includes(computerSelection);
	prompt(`You chose ${userSelection}, I chose ${computerSelection}`);

	if (userSelection === computerSelection) {
		prompt(`It's a draw!`);
	} else if (userSelectionWins) {
		prompt('You win, huzzah!');
	} else {
		prompt('You lose, womp womp...');
	}
};

// Generate a computer selection given the available options
const generateComputerSelection = () => {
	let randomIndex = Math.floor(Math.random() * OPTIONS.length);
	return OPTIONS[randomIndex];
};

// Prompt user for valid selection
const getUserSelection = () => {
	prompt(`Choose one: ${OPTIONS.join(', ')}`);
	let userSelection = question();

	while (!OPTIONS.includes(userSelection)) {
		prompt(`That's not a valid choice, please choose again`);
		userSelection = question();
	}

	return userSelection;
};

// Determine if user wants to play again
const getPlayAgain = () => {
	prompt('Do you want to play again (y/n)?');
	let answer = question().toLowerCase();

	while (!DECISIONS.includes(answer[0])) {
		prompt(`Please enter 'y' or 'n'`);
		answer = question().toLowerCase();
	}

	return answer[0] === 'y';
};

// Main
const main = () => {
	let play = true;
	while (play) {
		displayWelcome();

		const userSelection = getUserSelection();
		const computerSelection = generateComputerSelection();
		displayWinner(userSelection, computerSelection);
		
		play = getPlayAgain();
		if (!play) prompt('Thanks for playing! Goodbye...');
	}
};

// Initialize
main();
