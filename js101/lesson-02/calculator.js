const { question } = require('readline-sync');
const { localize } = require('./calculator-localization');

const LANGUAGES = ['en', 'fr'],
  OPERATORS = ['1', '2', '3', '4'],
  DECISIONS = ['y', 'n'];
let lang = 'en';

// Get prompt messages based on language
const prompt = (key, extension = '', userLang = lang) => {
  const message = localize(key, userLang);
  console.log(`=> ${message}${extension}`);
};

// Check for valid number
const isInvalidNum = num => !num || Number.isNaN(Number(num));

// Prompt for valid number
const getValidNum = (input, error) => {
  let newInput = input;
  while (isInvalidNum(newInput)) {
    prompt(error);
    newInput = question();
  }
  return newInput;
};

// Prompt for valid option
const getValidOption = (options, input, error) => {
  let newInput = input;
  while (!options.includes(newInput)) {
    prompt(error);
    newInput = question().toLowerCase();
  }
  return newInput;
};

// Ask for user input
const getUserInput = (options = [], message = '', error = '') => {
  prompt(message);
  let input = question().toLowerCase();

  // If no array of options is passed in, check for valid number
  if (!options) {
    input = getValidNum(input, error);
  } else {
    input = getValidOption(options, input, error);
  }

  // If entered value is a string of integers, return as a number value
  return !isInvalidNum(input) ? Number(input) : input;
};

// Perform the operation on the two numbers
const calculate = (num1, num2, operator) => {
  switch (operator) {
    case 1:
      return num1 + num2;
    case 2:
      return num1 - num2;
    case 3:
      return num1 * num2;
    case 4:
      return num1 / num2;
    default:
      return localize('noResult', lang);
  }
};

// Print the result to the terminal
const displayResult = output => {
  return output !== Infinity ? prompt('result', `: ${output}`) : prompt('noInfinityRule');
};

// Main
const calculator = () => {
  let num1 = getUserInput(null, 'firstNumber', 'invalidNumber');
  let num2 = getUserInput(null, 'secondNumber', 'invalidNumber');
  let operator = getUserInput(OPERATORS, 'operationType', 'invalidOperator');
  let output = calculate(num1, num2, operator);
  displayResult(output);

  let runAgain = getUserInput(DECISIONS, 'performAnother', 'invalidDecision');
  if (runAgain === 'y') {
    calculator();
  } else if (runAgain === 'n') {
    prompt('terminate');
  }
};

// Initialize
(() => {
  lang = getUserInput(LANGUAGES, 'langSelect', 'invalidLanguage');
  prompt('greeting');
  calculator();
})();
