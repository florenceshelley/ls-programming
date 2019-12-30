## Greet 1
* Calling a function with a default parameter and passing in `null` uses `null` as an actual value, e.g.
	```js
	function greet(greeting = 'Hello') {
		console.log(greeting + ', world!');
	}

	greet(null);				// 'null, world!'
	greet(undefined);		// 'Hello, world!'
	```

## Greet 3
```js
function greeting() {
	return 'Good morning';
}

function recipient() {
	return 'Canada';
}

function greet() {
	console.log(`${greeting()}, ${recipient()}!`);
}
```
* Storing the return value of `greeting` and `recipient` in memory (in a variable or constant) throws a reference error (e.g. `let greeting = greeting(), recipient = recipient; console.log(\`${greeting}, ${recipient}!\`);`)

## Rest Parameters
```js
functions sum() {
	values = Array.prototype.slice.call(arguments);

	return values.reduce(function(a, b) {
		return a + b;
	};
}
```
* `Array.prototype.slice.call(arguments)`
	* `.call()`
* Use `...values` instead => `function sum(...values) { // ... }`
* The _rest parameter_ captures an indefinite number of arguments in an array

## Spread Operator
```js
function formatName(firstName, middleName, lastName) {
	return `${lastName}, ${firstName} ${middleName[0]}.`;
}

let fullName = ['James', 'Tiberius', 'Kirk'];

console.log(formatName(...fullName));
```
* The _spread operator_ expands an array into a number of arguments

## Calculate BMI
* `.toFixed()`

## Calculate Cat Age
```js
function catAge(humanYears) {
	switch(humanYears) {
		case 1:
			return 15;
		case 2:
			return 24;
		default:
			return 24 + (humanYears - 2) * 4;
	}
}
```

## Arrow Functions (Part 1)
```js
const template = 'I VERB NOUN.';
const sentence = (verb, noun) => template
	.replace('VERB', verb)
	.replace('NOUN', noun);

console.log(sentence('like', 'birds'));
```

## Arrow Functions (Part 2)
```js
let initGame = () => ({
	level: 1,
	score: 0
});

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);
```
