## Repeat
* `String.prototype.repeat()`

## Multiline String
* `\t` sets new tabs in a string

## Contains Character
* _"It's a great exercise to try to implement the functionality of `String.prototype.includes()` yourself"_

## Capitalize Words
Write code that capitalizes the words in the string, `launch school tech & talk`, so that you get the string, `Launch School Tech & Talk`

```js
const capitalize = string => {
	const strings = string.split(' ');
	const capitalized = strings.map(word => word[0].toUpperCase() + word.slice(1));
	
	return capitalized.join(' ');
};
```
