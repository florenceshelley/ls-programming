## Last Element
* _"Because arrays in JS have a zero-based index, the last element of an array is at an index position one less than its length (e.g. in an array with three elements, the elements are at index positions 0 — the first element — 1, and 2 — the last element)"_

## Add + Delete
* `Array.prototype.unshift()`
* `.shift()` changes the original array
* `.slice(1)` returns a new array
* `.splice(0, 1)` changes the original array

## Alphabet
**Split the string `alphabet` into an array of characters**

* `Array.from(alphabet)`
* `String.prototype.split('')` splits the string between each UTF-16 code unit

## Equality
* JS checks if non-primitives are the _same object_, i.e. whether they reference the same location in memory

## Travel
* Recall `Array.prototype.indexOf()`
	* This method uses strict equality and is implemented similarly to how you would use a standard loop to iterate over each element in the array to check if an element exists
	* A consequence of using strict equality is that this only works for primitive types; for objects, the equality check would test whether the input object and the elements in the list are the same object in terms of reference, e.g.
	```js
	let lists = [[1, 2], [3], [4, 5, 6]];

	contains([3], lists);		// false
	```
	* _"There is, in fact, no straight-forward built-in way to test the value equality of two arbitrary objects in JS. But there are libraries that provide this functionality"_
	* See [Lodash' `isEqual` method](https://lodash.com/docs#isEqual)

## Passcode
* _A higher level of abstraction for `Array.prototype.join()`:_ hides the iteration and string building behind a simple method call, this making it easier to see at one glance what the solution code does
