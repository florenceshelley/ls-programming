/* Write a function that takes one integer argument, which may be positive, negative, or zeo. This method returns true if the numer's absolute value is odd. You may assume that the argument is a valid integer value */

const isOdd = num => num % 2 !== 0;

// Examples:
console.log(isOdd(2));		// => false
console.log(isOdd(5));		// => true
console.log(isOdd(-17));	// => true
console.log(isOdd(-8));		// => false
console.log(isOdd(0));		// => false
console.log(isOdd(7));		// => true

/* Provided solution:
 *
 * function isOdd(number) {
 * 	return Math.abs(number) % 2 === 1;
 * }
 *
 * In JS, the remainder operator returns negative results if the number on the left is negative, therefore calling `Math.abs()` and passing the number as an arg converts it to a positive value.
 */
