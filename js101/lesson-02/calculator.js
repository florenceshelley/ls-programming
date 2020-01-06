const {question} = require('readline-sync');
let num1, num2, operator, output;

const prompt = message => console.log(`=> ${message}`);
const invalidNum = num => !num || Number.isNaN(Number(num));

prompt('Welcome to Calculator!');

// Ask the user for the first number
prompt('What\'s the first number?');
num1 = question();

while (invalidNum(num1)) {
  prompt('Whoops! You\'ve entered an invalid number value');
  num1 = question();
}

// Ask the user for the second number
prompt('What\'s the second number?');
num2 = question();

while (invalidNum(num2)) {
  prompt('Whoops! You\'ve entered an invalid number value');
  num2 = question();
}

// Ask the user for an operation to perform
prompt('What operation would you like to perform?');
prompt('1) Add 2) Subtract 3) Multiply 4) Divide');
operator = question();

while (!['1', '2', '3', '4'].includes(operator)) {
  prompt('Whoops! You\'ve selected an invalid operation');
  operator = question();
}

// Perform the operation on the two numbers
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
