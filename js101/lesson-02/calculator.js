const {question} = require('readline-sync');
let num1, num2, operator, output;

console.log('Welcome to Calculator!');

// Ask the user for the first number
console.log('What\'s the first number?');
num1 = question();

// Ask the user for the second number
console.log('What\'s the second number?');
num2 = question();

// Ask the user for an operation to perform
console.log(
  'What operation would you like to perform?' +
  '\n1) Add 2) Subtract 3) Multiply 4) Divide'
);
operator = question();

// Perform the operation on the two numbers
if (operator === '1') {
  output = Number(num1) + Number(num2);
} else if (operator === '2') {
  output = Number(num1) - Number(num2);
} else if (operator === '3') {
  output = Number(num1) * Number(num2);
} else if (operator === '4') {
  output = Number(num1) / Number(num2);
} else {
  console.log('Whoops! You\'ve selected an invalid operation');
}

// Print the result to the terminal
console.log(
  output
    ? `The result is: ${output}`
    : 'Whoops! One or both of the entered number values are invalid'
);

