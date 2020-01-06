const MESSAGES = {
  en: {
    errorOccurred: 'An error has occurred...',
    firstNumber: 'What\'s the first number?',
    greeting: 'Welcome to Calculator!',
    invalidLanguage: 'Whoops! You\'ve entered an invalid language',
    invalidNumber: 'Whoops! You\'ve entered an invalid number value',
    invalidOperator: 'Whoops! You\'ve selected an invalid operation',
    invalidYesOrNo: 'Whoops! Please enter yes (y) or no (n)',
    langSelect: 'Select a language: \'en\' or \'fr\'',
    noInfinityRule: 'Whoops, we\'ve reached Infinity! Check that zero was not used as a divisor, and try again',
    operationType: 'What operation would you like to perform?\n=> 1) Add 2) Subtract 3) Multiply 4) Divide',
    performAnother: 'Do you want to perform another calculation? (y/n)',
    result: 'The result is',
    secondNumber: 'What\'s the second number?',
    terminate: 'Goodbye!'
  },
  fr: {
    errorOccurred: 'Une erreur est survenue...',
    firstNumber: 'Quel est le premier numéro?',
    greeting: 'Bienvenue dans Calculatrice!',
    invalidLanguage: 'Oups! Vous avez entré une langue invalide',
    invalidNumber: 'Oups! Vous avez entré une valeur numérique invalide',
    invalidOperator: 'Oups! Vous avez sélectionné une opération invalide',
    invalidYesOrNo: 'Oups! Veuillez saisir oui (y) ou non (n)',
    langSelect: 'Sélectionnez une langue: \'en \' ou \'fr \'',
    noInfinityRule: 'Oups, nous avons atteint Infinity! Vérifiez que zéro n\'a pas été utilisé comme diviseur et réessayez',
    operationType: 'Quelle opération souhaitez-vous effectuer?\n=> 1) Ajouter 2) Soustraire 3) Multiplier 4) Diviser',
    performAnother: 'Voulez-vous effectuer un autre calcul? (y / n)',
    result: 'Le résultat est',
    secondNumber: 'Quel est le deuxième numéro?',
    terminate: 'Au revoir!'
  }
};

const getLocalization = (key, lang = 'en') => MESSAGES[lang][key];

module.exports = {localize: getLocalization};
