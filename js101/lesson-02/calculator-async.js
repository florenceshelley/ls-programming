const { createInterface } = require('readline');
let num1, num2, operator, output;

const readline = createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Calculator!');

// Ask the user for the first number
readline.question(`What's the first number?\n`, answer1 => {
  num1 = answer1;

  // Ask the user for the second number
  readline.question(`What's the second number?\n`, answer2 => {
    num2 = answer2;

    // Ask the user for an operation to perform
    readline.question(
      'What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide\n',
      answer3 => {
        operator = answer3;
        readline.close();
      }
    );
  });
});

readline.on('close', () => {
  const error =
    operator < 1 || operator > 4
      ? `Whoops! You've selected an invalid operation`
      : 'Whoops! One or both of the entered number values are invalid';

  // Perform the operation on the two numbers
  if (operator === '1') {
    output = Number(num1) + Number(num2);
  } else if (operator === '2') {
    output = Number(num1) - Number(num2);
  } else if (operator === '3') {
    output = Number(num1) * Number(num2);
  } else if (operator === '4') {
    output = Number(num1) / Number(num2);
  }

  // Print the result to the terminal
  console.log(output ? `The result is: ${output}` : error);
});
