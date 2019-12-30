## Retrieve a Value (Part 1)
* Recall that attempting to access an object property that does not exist returns undefined

## Greetings from Jane
```js
let jane = {
	firstName: 'Jane',
	lastName: 'Harrelson',
	age: 32,
	location: {
		country: 'Denmark',
		city: 'Aarhus'
	},
	occupation: 'engineer',
	greet: name => console.log(`Hey, ${name}!`)
};

jane.greet('Bobby');		// Hey, Bobby!
```
* When a value is a function and it is invoked with an explicit caller, it is called a _method_ invocation

## Car Keys
```js
let vehicle = {
	manufacturer: 'Tesla',
	model: 'Model X',
	year: 2015,
	range: 295,
	seats: 7
};

const keys = Object.keys(vehicle);
```

## Convert an Object to a Nested Array
```js
let person = {
	title: 'Duke',
	name: 'Nukem',
	age: 33
};

const nestedPerson = Object.entries(person);
```

## ...And Vice Versa
```js
const nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

const person = nestedArray.reduce((acc, cur) => {
	acc[cur[0]] = cur[1];
	return acc;
}, {});

// `Object.fromEntries()` performs the reverse of `Object.entries()`
// const person = Object.fromEntries(nestedArray)
```

## Cloning a Person
* `Object.assign()` only creates a shallow copy of an object, therefore its original values can be mutated when changed from the shallow copied object
