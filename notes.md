## Definitions
* **Standard Library:** collective components and operations that are part of a core language

## Node.js
Needs the following minimal capabilites
* The ability to read and write disk files (disk I/O)
* The ability to read and write via the terminal (standard I/O)
* The ability to send and receive messages over a network (network I/O)
* The ability to interact with a database

## Other JS Runtime Environments
* ActionScript
* GNOME

## Fun Facts
* JS automatically, but invisibly, inserts semi-colons where it needs them (however, can make it tricky to diagnose when it inserts a semi-colon where you don't expect or want them)
* Typically a programming environment provides two main types of reusable code to an application:
	1. components and operations that are part of the core language (often called the _standard library_)
	2. components and operations specific to a runtime environment
* The thumbs down next to methods in the MDN documentation mean that those methods are deprecated

## Constructors, and Methods, and Properties, oh my!
* Constructors represent a blueprint for a data type with the same name; think of them as factories
* Methods are functioms that need a value that you can use to xall the function (i.e. `'string'.toUpperCase()`)
* Two types of methods: **instance methods** and **static methods**
* Instance methods: `Constructor.prototype.methodName()`
* Static methods: `Constructor.methodName()`
* A property says something about the value, an operation does something with that value
* You apply instance methods to a value of the type that the constructor represents (i.e. applying an instance method to a string)
	* `String.prototype.concat()`:
	```js
	'Hello, '.concat('Bob!')
	// => 'Hello, Bob!'
	```
* To call a static method, you use the constructor name (`String`) instead of a value
	* I.o.w. we don't need a string to call it. We can instread use the constructor to call the method:
	```js
	String.fromCharCode(97)
	// => 'a'
	```

