## Lowercase
* `String.prototype.toLocalLowerCase()` is relevant for alphabets which the case mapping is not as straightforward as in English

## Out of Bounds
* Attempting to access an element at an index that is out of bounds of the array will return `undefined`

## Properties and Methods
* Properties are nouns and are called without parentheses
* Methods are verbs and must be invoked with parentheses

## Type of Primitive
```js
typeof 23.5;					// 'number'
typeof 'Some text';		// 'string'
typeof false;					// 'boolean'
typeof 0;							// 'number'
typeof null;					// 'object'
typeof undefined;			// 'undefined'
```

* Where `typeof null` returns an object, this was considered a [historic bug](https://2ality.com/2013/10/typeof-null.html)
* `Array.isArray()` instead of `typeof [1, 2, 3]`

## Equality
* `==` is also known as the standard or abstract equality operator (attempts to convert operators to the same type before making a comparison)
