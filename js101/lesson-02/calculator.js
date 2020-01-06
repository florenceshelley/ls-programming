const {question} = require('readline-sync');
const {localize} = require('./calculator-localization');

let lang = 'en';

// Get prompt messages based on language
const prompt = (key, extension = '') => {
  const message = localize(key, lang);
  console.log(`=> ${message}${extension}`);
};

// Check for valid number
const invalidNum = num => !num || Number.isNaN(Number(num));

// Ask the user for a number
const getNum = position => {
  prompt(`${position}Number`);
  let number = question();

  while (invalidNum(number)) {
    prompt('invalidNumber');
    number = question();
  }

  return number;
};

// Ask the user for an operation to perform
const getOperator = () => {
  const OPERATORS = ['1', '2', '3', '4'];

  prompt('operationType');
  let operator = question();

  while (!OPERATORS.includes(operator)) {
    prompt('invalidOperator');
    operator = question();
  }

  return operator;
};

// Ask the user if they want to calculate something else
const getUserDecision = () => {
  prompt('performAnother');
  let decision = question().toLowerCase();

  while (!['y', 'n'].includes(decision)) {
    prompt('invalidYesOrNo');
    decision = question().toLowerCase();
  }

  return decision;
};

// Perform the operation on the two numbers
const calculate = (num1, num2, operator) => {
  let output;

  switch (operator) {
    case '1':
      output = Number(num1) + Number(num2);
      break;
    case '2':
      output = Number(num1) - Number(num2);
      break;
    case '3':
      output = Number(num1) * Number(num2);
      break;
    case '4':
      output = Number(num1) / Number(num2);
      break;
  }

  // Print the result to the terminal
  return (operator !== '4' && num2 !== '0') || output !== Infinity
    ? prompt('result', `: ${output}`)
    : prompt('noZeroDivisor');
};

// Main
const calculator = () => {
  let num1 = getNum('first');
  let num2 = getNum('second');
  let operator = getOperator();

  calculate(num1, num2, operator);

  let calculateAgain = getUserDecision();

  if (calculateAgain === 'y') {
    calculator();
  } else if (calculateAgain === 'n') {
    prompt('terminate');
  }
};

// Initialize
prompt('greeting');
calculator();
