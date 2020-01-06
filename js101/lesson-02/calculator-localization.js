const MESSAGES = {
  en: {
    firstNumber: 'What\'s the first number?',
    greeting: 'Welcome to Calculator!',
    invalidNumber: 'Whoops! You\'ve entered an invalid number value',
    invalidOperator: 'Whoops! You\'ve selected an invalid operation',
    invalidYesOrNo: 'Whoops! Please enter yes (y) or no (n)',
    noZeroDivisor: 'Zero is not a valid divisor, please try again',
    operationType: 'What operation would you like to perform?\n=> 1) Add 2) Subtract 3) Multiply 4) Divide',
    performAnother: 'Do you want to perform another calculation? (y/n)',
    result: 'The result is',
    secondNumber: 'What\'s the second number?',
    terminate: 'Goodbye!'
  }
};

const getLocalization = (key, lang = 'en') => MESSAGES[lang][key];

module.exports = {localize: getLocalization};
