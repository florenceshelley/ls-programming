const MESSAGES = {
  en: {
    firstNumber: 'What\'s the first number?',
    greeting: 'Welcome to Calculator!',
    invalidLanguage: 'Whoops! You\'ve entered an invalid option, please choose English (en) or French (fr)',
    invalidNumber: 'Whoops! You\'ve entered an invalid number value',
    invalidDecision: 'Whoops! Please enter yes (y) or no (n)',
    invalidOperator: 'Whoops! You\'ve selected an invalid operation',
    langSelect: 'Select a language: \'en\' or \'fr\'',
    noInfinityRule: 'Whoops, the result returned Infinity! Check that zero was not used as a divisor, and try again',
    noResult: 'No result... Looks like something went wrong, please try again',
    operationType: 'What operation would you like to perform?\n=> 1) Add 2) Subtract 3) Multiply 4) Divide',
    performAnother: 'Do you want to perform another calculation? (y/n)',
    result: 'The result is',
    secondNumber: 'What\'s the second number?',
    terminate: 'Goodbye!'
  },
  fr: {
    firstNumber: 'Quel est le premier numéro?',
    greeting: 'Bienvenue dans Calculatrice!',
    invalidLanguage: 'Oups! Vous avez entré une langue invalide',
    invalidNumber: 'Oups! Vous avez entré une valeur numérique invalide',
    invalidDecision: 'Oups! Veuillez saisir oui (y) ou non (n)',
    invalidOperator: 'Oups! Vous avez sélectionné une opération invalide',
    langSelect: 'Sélectionnez une langue: \'en \' ou \'fr \'',
    noInfinityRule: 'Oups, le résultat est revenu Infinity! Assurez-vous que zéro n\'a pas été utilisé comme séparateur et réessayez',
    noResult: 'Aucun résultat ... On dirait que quelque chose s\'est mal passé, veuillez réessayer',
    operationType: 'Quelle opération souhaitez-vous effectuer?\n=> 1) Ajouter 2) Soustraire 3) Multiplier 4) Diviser',
    performAnother: 'Voulez-vous effectuer un autre calcul? (y / n)',
    result: 'Le résultat est',
    secondNumber: 'Quel est le deuxième numéro?',
    terminate: 'Au revoir!'
  }
};

const getLocalization = (key, lang = 'en') => MESSAGES[lang][key];

module.exports = {localize: getLocalization};
