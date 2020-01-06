const {question} = require('readline-sync');

const prompt = message => console.log(`=> ${message}`);
const invalidNum = num => !num || Number.isNaN(Number(num));

// Ask the user for a number
const getNum = position => {
  prompt(`What's the ${position} number?`);
  let number = question();

  while (invalidNum(number)) {
    prompt('Whoops! You\'ve entered an invalid number value');
    number = question();
  }

  return number;
};

// Ask the user for an operation to perform
const getOperator = () => {
  const OPERATORS = ['1', '2', '3', '4'];

  prompt('What operation would you like to perform?');
  prompt('1) Add 2) Subtract 3) Multiply 4) Divide');
  let operator = question();

  while (!OPERATORS.includes(operator)) {
    prompt('Whoops! You\'ve selected an invalid operation');
    operator = question();
  }

  return operator;
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
  prompt(`The result is: ${output}`);
};

// Main
const calculator = () => {
  let num1 = getNum('first');
  let num2 = getNum('second');
  let operator = getOperator();

  calculate(num1, num2, operator);

  // Ask the user if they want to calculate something else
  prompt('Do you want to perform another calculation? (y/n)');
  let calculateAgain = question().toLowerCase();

  while (!['y', 'n'].includes(calculateAgain)) {
    prompt ('Whoops! Please enter yes (y) or no (n)');
    calculateAgain = question().toLowerCase();
  }

  if (calculateAgain === 'y') {
    calculator();
  } else if (calculateAgain === 'n') {
    prompt('Goodbye!');
  }
};

// Initialize
prompt('Welcome to Calculator!');
calculator();
