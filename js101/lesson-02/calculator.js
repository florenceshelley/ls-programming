const {question} = require('readline-sync');
const {localize} = require('./calculator-localization');

let lang = 'en';

// Get prompt messages based on language
const prompt = (key, extension = '', userLang = lang) => {
  const message = localize(key, userLang);
  console.log(`=> ${message}${extension}`);
};

// Check for valid number
const isInvalidNum = num => !num || Number.isNaN(Number(num));

// Ask the user to select a language
const getLang = () => {
  const LANGUAGES = ['en', 'fr'];

  prompt('langSelect', '', 'en');
  let userLang = question().toLowerCase();

  while (!LANGUAGES.includes(userLang)) {
    prompt('invalidLanguage');
    userLang = question().toLowerCase();
  }

  return userLang;
};

// Ask the user for a number
const getNum = position => {
  prompt(`${position}Number`);
  let number = question();

  while (isInvalidNum(number)) {
    prompt('invalidNumber');
    number = question();
  }

  return Number(number);
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
  switch (operator) {
    case '1': return num1 + num2;
    case '2': return num1 - num2;
    case '3': return num1 * num2;
    case '4': return num1 / num2;
    default: return localize('noResult', lang);
  }
};

// Print the result to the terminal
const displayResult = output => (
  output !== Infinity
    ? prompt('result', `: ${output}`)
    : prompt('noInfinityRule')
);

// Main
const calculator = () => {
  let num1 = getNum('first');
  let num2 = getNum('second');
  let operator = getOperator();
  let output = calculate(num1, num2, operator);
  displayResult(output);

  let calculateAgain = getUserDecision();
  if (calculateAgain === 'y') {
    calculator();
  } else if (calculateAgain === 'n') {
    prompt('terminate');
  }
};

// Initialize
(() => {
  lang = getLang();
  prompt('greeting');
  calculator();
})();
