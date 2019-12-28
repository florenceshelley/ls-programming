## What's My Value (Part 5)
* **"Temporal dead zone":** the variable exists, but doesn't have a value -- not even a value of `undefined`

## What's My Value (Part 8)
* _**Variable shadowing:**_ the parameter of a function shadows the variable in its outer scope:

```js
let a = 1;

function myFunction(a) {
	console.log(a);
}

let b = 2;

myFunction(b);
```

## What's My Value (Part 10)
* `Object.freeze()` method does a shallow freeze to make the immediate properties of an object immutable; if the value of those properties are objects themselves, they can still be mutated
