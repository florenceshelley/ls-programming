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

/**
 * Display prompt
 * @param {string} message
 */
const prompt = message => {
	console.log(`=> ${message}`);
};

// Display divider
const keyline = () => {
	prompt('========================================================');
};

const displayWelcome = () => {
	console.clear();
	prompt('Welcome to Rock Paper Scissors Spock Lizard (Best of 5)!');
	keyline();
};

/**
 * Display game scores
 * @param {Object} scores
 */
const displayScores = scores => {
	prompt('SCORE BOARD');
	prompt(`User: ${scores.user}`);
	prompt(`Computer: ${scores.computer}`);
	keyline();
};

/**
 * Display round winner
 * @param {string} userSelection
 * @param {string} computerSelection
 */
const displayRoundWinner = (userSelection, computerSelection) => {
	const userSelectionWins = WINNING_COMBINATIONS[userSelection].includes(computerSelection);
	prompt(`\n=> You chose ${userSelection}, computer chose ${computerSelection}`);

	if (userSelection === computerSelection) {
		prompt(`It's a draw!`);
	} else if (userSelectionWins) {
		prompt('You win, huzzah!');
	} else {
		prompt('You lose, womp womp...');
	}

	keyline();
};

/**
 * Display game results
 * @param {Object} scores
 */
const displayGameResults = scores => {
	scores.user > scores.computer
		? prompt(`You win with a final score of ${scores.user}!`)
		: prompt(`Computer wins with a final score of ${scores.computer}!`);
};

/**
 * Implicit recursion to re-run game logic with memoized scores
 * @todo Refactor this because this doesn't make sense
 * @todo Give this a better name
 */
const shouldUserContinue = scores => {
	if (scores.user < 3 && scores.computer < 3) {
		continuePrompt();
		game(scores.user, scores.computer)
	} else {
		displayGameResults(scores);
	}
};

// Placeholder to allow scores to display before recursing to next round
const continuePrompt = () => {
	prompt(`Enter in any key to continue`);
	question();
};

// Generate a computer selection given the available options
const generateComputerSelection = () => {
	let randomIndex = Math.floor(Math.random() * OPTIONS.length);
	return OPTIONS[randomIndex];
};

// Prompt user for valid selection
const getUserSelection = () => {
	prompt('Choose one of the following:');
	prompt(OPTIONS.join(', '));
	let userSelection = question();

	while (!OPTIONS.includes(userSelection)) {
		prompt(`That's not a valid choice, please choose again`);
		userSelection = question();
	}

	return userSelection;
};

// Determine if user wants to play again
const playAgain = () => {
	prompt('Do you want to play again (y/n)?');
	let answer = question().toLowerCase();

	while (!DECISIONS.includes(answer[0])) {
		prompt(`Please enter 'y' or 'n'`);
		answer = question().toLowerCase();
	}

	return answer[0] === 'y';
};

// Determine winner and add points to scoreboard
const calculateScores = (userSelection, computerSelection, scores) => {
	const userSelectionWins = WINNING_COMBINATIONS[userSelection].includes(computerSelection);

	if (userSelectionWins) {
		scores.user++;
	} else if (userSelection !== computerSelection) {
		scores.computer++;
	}

	return scores;
};

/** 
 * Main
 * @param {number} userScore
 * @param {number} computerScore
 * @todo Decompose and clean this up
 * @todo Can we get rid of these parameters?
 */
const game = (userScore = 0, computerScore = 0) => {
	displayWelcome();

	const userSelection = getUserSelection();
	const computerSelection = generateComputerSelection();
	let scores = {
		user: userScore,
		computer: computerScore
	};
	scores = calculateScores(userSelection, computerSelection, scores);
	
	displayRoundWinner(userSelection, computerSelection);
	displayScores(scores);
	shouldUserContinue(scores);
};

// Initialize
(() => {
	let play = true;
	
	while (play) {
		game();
		play = playAgain();
	}

	prompt('Thanks for playing! Goodbye...');
})();
