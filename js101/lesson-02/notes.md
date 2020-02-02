## Markdown

- See [GitHub Flavoured Markdown Spec](https://github.github.com/gfm/)

## Truthiness

- **Short-circuit operators:** `&&` and `||`, where JS stops evaluating the expression as soon as a single condition is met
- Relying on the short-circuit behaviour can be dangerous, but can sometimes be handy, i.e. checking that a value first exists before operating on it

```js
const getNameFromUser = () => 'Sample Name';
let name;

if ((name = getNameFromUser())) {
  console.log(`Hi ${name}`);
} else {
  console.log('You must enter a name!');
}
```

## Pseudo-Code

- When you write _programming code_, you're writing it for other programs to process; when you write JS, you are writing for the JS engine/interpreter to process
- Pseudocode, on the other hand, is for humans -- machines or programs can't read it, so its format is relaxed, e.g.

```
Given a collection of numbers

Iterate through the collection one by one
  - save the first value as the starting value
  - for each iteration, compare the saved value with the current value
  - if the current number is greater
    - reassign the saved value as the current value
  - otherwise, if the current value is smaller or equal
    - move to the next value in the collection

After iterating through the collection, return the saved value
```

- Pseudocoding allows us to **load the problem into our brain** first
- When you first approach any problem, it's important to try to understand it well, and only then can you start to dissect it, understand it, and come up with an execution path to solve it
- There are two layers to solving any problem:
  - The logical problem domain layer
  - The syntactical programming language layer
- The problem with pseudocode, however, is that we cannot verify its logic. To verify the logic, we must translate the pseudocode into programming code, which is where you can focus on programming language syntax issues without having it interrupt your flow

### Formal Pseudo-Code

- Use some keywords to help break down the program logic into concrete commands, which makes translating code more natural

| Keyword         | Meaning                                  |
| --------------- | ---------------------------------------- |
| START           | start of the program                     |
| SET             | set a variable that we can use for later |
| GET             | retrieve input from user                 |
| PRINT           | display output to user                   |
| READ            | retrieve a value from a variable         |
| IF/ELSE IF/ELSE | show conditional branches in logic       |
| WHILE           | show looping logic                       |
| END             | end of the program                       |

```
START

# Given a collection of integers called "number"

SET iterator = 1
SET savedNumber = value within numbers collection at space 1

WHILE iterator <= length of numbers
  SET currentNumber = value within numbers colection at space "iterator"
  IF currentNumber > savedNumber
    savedNumber = currentNumber
  ELSE
    skip to the next iteration

  iterator = iterator + 1

PRINT savedNumber

END
```

### Translating Pseudo-Code into Programming Code

```js
function findGreatest(numbers) {
  let savedNumber = numbers[0];

  numbers.forEach(num => {
    if (num > savedNumber) savedNumber = num;
  });

  return savedNumber;
}
```

- Now, it's time to improve upon the code from a lower layer -- at the programming language level, e.g. what should we do if `numbers` is `undefined`?
- **Guard clause**: a check that immediately exits the function, either with a return statement or an exception, e.g. `if (numbers === undefined) return;`
- Remember that pseudocode is a guess at the solution; there's no verification that the logic is correct, and you can't do that until you translate it to program code
- For more sophisticated problems, we need to take a piecemeal approach when writing pseudocode, then translate that pseudocode to JS

## Flowchart

- **Oval:** Star/Stop
- **Rectangle:** Processing Step
- **Parallelogram:** Input/Output
- **Diamond:** Decision
- **Circle:** Connector

> _See sample image(s) in lesson section_

- The decision component (diamond) should only have two branches. If you have a decision condition that has 3 (or more branches), use separate diamonds for each branch
- Arrows should show the logic "flow"; helping us to map out the step-by-step logic our program would need to solve a problem
- This is called the **imperative** or **procedural** way to solve a problem
- In many higher level languages, basic concepts such as iterating over a collection are _encapsulated_ into a method, e.g. `forEach`
- Using `forEach` is the _declarative_ way to solve a problem
  - Declarative meaning that expressions or declarations are used instead of statements, see [Sookocheff's Blog](https://sookocheff.com/post/fp/what-is-functional-programming/)
- Flowcharts = imperative approach
- Visually and manually loop rather than using any declarative constructs built into the language; this forces you to understand the logic much better, and also forces you to "think like a computer", thus helping you debug logical errors in your code

### A Larger Problem

- When pseudocode gets long, it becomes difficult to trust the accuracy of the logic (recall that you can only verify the logic by running the actual program code), therefore it's prudent to extract a logical grouping into a sub-process and tackle various pieces independently
- As you use pseudocode and flowcharts to help you dissect the logic of a problem, you always need to think about how detailed the chart and words should be, and what you can extrac to sub-processes; a programmer must always think about that when designing the solution to a problem
- By not worrying about the low-level details of how those sub-processes wil work, we can think at a higher level about our overall application logic, when we're ready to dive into how each of those sub-processes should work, we can create the detailed pseudocode and flowcharts for each of them

## ESLint

- Make your variable and functio names consistent and _predictable_
- Never use assignments as a conditional expression if an `if` statement
- You should install `eslint` as a global package (along with `eslint-cli` and `babel-eslint`)
- `npm i (-g) eslint@5.12.1`
- See [Configuring ESLint](https://eslint.org/docs/user-guide/configuring)

## Debugging

- Programmers can get through the trivial code rather quickly, so the majority of their time is spent analyzing and understanding a problem, experimenting or coming up with an approach, or debugging bugs in the code

### Temperament

- _"The key to debugging is a logical mind and patient temperament"_
- As a programmer, you need to developer a systematic, patient temperament when faced with a problem
- Analogy: if you are walking to the bus stop and the bus leaves right before you get there
  - Someone with a programmer temperament should figure out
    1. when the next one comes
    2. if there's an alternative path of transfers you can take
    3. other alternative forms of transportation
- Stay even-keeled and be systematic
- _"Dealing with feelings of frustration is a critical aspect of learning to program"_

### Stack Trace

- Study the stack trace carefully and try to extract its meaningful bits

### Steps to Debugging

1. Reproduce the error

- Programmers need a deterministic way to reproduce the problem consistently, and only then can they start to isolate the root case

2. Determine the boundaries of the error

- Modify your code to determine what might be causing the error, e.g. test `data.users().getAll().push(newUser)`, `data.users().getAll().push(anotherUser)`, `data.users().getAll()`, `data.users()`, etc.

3. Trace the code

- _Trapping the error:_ identifying the area where an error originates

4. Understand the problem well

- Break it down, line by line

5. Implement a fix

- When using a library or code that you can't modify, sometimes you have little choice but to deal with the edge cases in your code, and may instead have to implement around it, e.g. using try/catch blocks
  > **Fix one problem at a time:** despite noticing other edge cases or problems while implementing a fix, you should resist trying to fix them all at once, as it becomes easy to be confused and make the situation even worse than it was; make a note of the issues your notice, finish fixing on what you're working on, then return to the list of issues and work on them one by one

6. Test the fix

- Be sure to verify that the code fixed the problem, and you may want to add an automated test to prevent regression (for now, test manually)

### Techniques for Debugging

1. Line by line

- Being careful, patient and developing a habit of _reading code line-by-line, word-by-word, character-by-character_ is your most useful programming skill; all other debugging tips and tools won't matter if you aren't _detail oriented_

2. Rubber duck

- When you explain the problem to a rubber duck, you force yourself to articulate the problem, detail by detail, thus often leading to discovering the root of the problem; focus on walking through the code, line by line

3. Walking away
4. Inspecting with a debugger

- You can run the debugger using `inspect` from the cli, e.g. `node inspect file.js`
- _Breakpoint:_ when the program stops execution at a specific line
- Use `cont` to move onto the next point in a program
- Use `watch('symbolConstantExpressionOrVariableToWatchFor')` to specificy to the debugger what you want to watch for (see the value of the expression when execution stops at that breakpoint)
- The debugger will execute on every iteration until the loop condition evaluates to `false`

5. Advanced debugging

- Consider node debuger and chrome dev tools additional helpful features to systematically step through code

## Assignment: Calculator Bonus Features
* As you program more, you'll realize that there's not such thing as a program that's _"done"_
* See [What is JSON](https://developers.squarespace.com/what-is-json)

## Explicit Type Coercion
* There are two types of coercion in JS:
	1. **Explicit coercion**
	2. **Implicit coercion**
* String to Number conversions is one of the most common explicit type coercions in JS programs
* _It is what it is:_ `Number()` converts empty strings or whitespace-only strings to `0` (wtfjs)

```js
Number({})						// NaN
Number([])						// 0
Number([4])						// 4
Number([undefined])		// 0
Number([1, 2, 3])			// NaN
Number(undefined)			// NaN
Number(null)					// 0
```

* The key takeaway is to be aware that these inconsistencies exist, and to ensure that your code accounts for them
* `parseInt` and `parseFloat` only operate on strings, and don't work with other types
* `parseInt` converts strings to numbers even when the string contains non-numeric characters, as long as the string begins with a digit (optionally preceded by a `+` or `-`); observe:

```js
parseInt('12oz')			// 12
parseInt('-12')				// -12
parseInt('12')				// 12
parseInt('oo+12')			// NaN
``` 

* `parseInt` also accepts a second argument called the **radix**, which specifies the base of the number contained in the string, e.g. `10101` in the binary numbering system (base-2) represents the number 21 in decimal (base-10); it supports radices from 2 to 36. See [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

```js
parseInt('10101', 2)		// 21
```

### Coercing to Numbers Using the + Operator

- The unary `+` operator attempts to coerce a value to a number. It works like the `Number` function, but is more succint

```js
+""     // 0
+'1'    // 1
+'2.3'  // 2.3
+[]     // 0
+'abc'  // NaN
```

### Coercing Values to Strings
* `42.toString()` — JS interprets the `.` as part of a floating point number

```js
(42).toString()													// '42'
42..toString()													// '42'
[1, 2, 3].toString()										// '1,2,3'
[1, null, 2, undefined, 3].toString() 	// '1,,2,,3'
```

* `Array.prototype.toString()` treats `null` and `undefined` elements as empty values
* In JS, it's illegal to call a method on `null` and `undefined`
* `String()` works on `null` and `undefined`, which is useful since `.toString()` can lead to a program-halting error if the value turns out to be `undefined` or `null`

```js
String(null)				// 'null'
String(undefined)		// 'undefined'
```

* Understand the different methods and relative advantages and disadvantages of each method

## Implicit Type Coercion
```js
1 == true						// true
3 == true						// false
0 == false					// true
undefined == null		// true
```

* `if (val === undefined || val === null)` can be shortened to `if (val == undefined)` without any effect on its behaviour, but opt for the first version for explicitness and clarity

```js
let arr = []
arr = []				// false
arr == arr			// true
```

* When one of the operands is an object and the other a primitive, `==` coerces the object to a primitive before making the comparison

```js
'' == {}									// false
'[object object]' == {}		// true
[] == ''									// true
```

* The plain object `{}` is coerced into the string `'[object object]'`, thus evaluating to `true`
* An empty array is coerced into an empty string, thus `[] == 0` evaluates to `true` (`[]` => `''`, `''` => `0`, `0 == 0` => `true`, therefore `[] == 0` => `true`)

* When a number is compared to a string using `==`, the string is coerced to a number
* When a boolean is compared to any other value, it is coerced to a number and then compared again using the `==` operator
* When an object is compared with a primitive value, the object is coerced into a primitive value and compared again using the `==` operator
* A `==` comparison of `undefined` with `null` evaluates to `true`


```js
1 + true			// 2
1 + false			// 1
true + false	// 1
null + false	// 0
null + null		// 0
1 + undefined	// NaN
```

* The relational operators `<`, `>`, `<=`, `>=` are defined for numbers (numeric comparison) and strings (lexicographic/alphabetical order)

## Code Style

```js
const CARDS = [1, 2, 3];
```

* Since `CARDS` is a constant, you shouldn't add, remove, or modify its values. JS lets you do that, but you should not. **Constants should be immutable.**

### Functions

* The instinct to extract code to a function is good. However, be sure that the function does only one thing, and that its responsibility is limited

#### Tips for Writing Good Functions

* Don't log to the console, return a **significant** value (explicitly return something, since JS always returns a value, and returns `undefined` if nothing is returned; the key is that return value shouldn't be part of the function's defined behaviour

* Decide whether the function should return a value with no side effects or perform side effects with no return value (choose one); the function name should reflect whether it has side effects or not, i.e. you can name a function `updateElementAt` that updates the content of a collection, where `upate` implies that you're changing something externally (a side effect) rather than obtaining a new value

* If the function also mutates the cards array, it becomes confusing; if you find yourself always looking at the function implementation, it's a sign that the function is misnamed or doing more than one thing

#### Functions Should Be at the Same Level of Abstraction

* Usually, functions take some input and return an output

* When working with a function, you should mentally extract the function from the program and work with it in isolation; you should be able to feed it inputs and expect it to produce some outputs (think: should be testable through Postman) — when you have a function like that, you can use it without thinking about the implementation; working this way helps compartmentalize your focus (important when working on large codebases)

* When you read good code, the functions are all at the same layer of abstraction

* You shouldn't care about the implementation when you use the function

* Pay attention to how you organize your functions and whether you can look at a list of functions a wee later and still understand how to use them without studying their implementations

#### Function Names Should Reflect Mutation

* e.g. `updateTotal` assumes that it mutates the passed-in parameter, where we don't expect the function to return a value

* The less you have to remember, and the less other people have to remember while looking at your code, the better

* Use naming conventions, even in your code, to signify which types of functions mutate vs. which functions return values

* If a function has side effects and returns a value, it makes debugging and using the function difficult

* If some functions are convoluted because the logic is complex, it's a sign that you don't quite understand the problem well enough to break it down into well-compartmentalized pieces; your understanding should grow as you dig deeper into the code. Refactor your code as you understand the problem, to reflect that increased clarity (as your narrative comes into focus, the structure of your piece becomes more organized and clean)

#### Displaying Output

* In functions that only display information (e.g. in functions that only log something to the console), be sure to prefix the function with `print`, `say` or `display`, and only output values in these functions, don't mutate parameters or return values

* Functions are like black boxes and should be self-contained, you should know what they do without looking at the implementation

### Miscellaneous Tips

* Name your functions from the perspective of using them later; think first about how you want to invoke them, and think about the implemenation later

```js
function findAce(cards) {...}

let ace = findAce(cards);
```

* The easier it is to read your code, the easier it is to debug and maintain

* Know when to use a regular `while` loop vs a generic `while (true)` loop

```js
while (answer.toLowerCase() !== 'n') {
	console.log('Continue? (y/n)');
	let answer = readline.question();
}
```

* When running the above code, JS will throw an exception of "ReferenceError: answer is not defined. Fix:

```js
let answer = '';
while (answer.toLowerCase() !== 'n') {
	console.log('Continue? (y/)');
	let answer = readline.question();
}
```

* While the above works, another implementation woud be to break out of the loop:

```js
while (true) {
	console.log('Continue? (y/n)');
	let answer = readline.question();
	if (answer.toLowerCase() === 'n') break;
}
```

* In the above, all the code is contained in the loop, and is slightly easier to reason about it

* Opt for clarity over terseness; we could use the user's input directly in the `if` condition, but `answer` is fine

## Variable Scope

* The concept of global scope is a little more nuanced when you compare JS in the browser to JS in node. In node, a global variable is **only available in the file/module you declare it it**. If you want variables to be available in another module, you'll have to explicitly import and export them in modules :P

### Local Scope

* Comes in two forms: **function scope** and **block scope**

#### Function Scope

* Functions define a new scope for local variables (inner scope), nested functions define nested scopes, and a variable's scope is determined by where it is declared

* When we instantiate variables in an inner scope, we have to be careful that we're not accidentally re-assigning an existing variable in an outer scope

* Once a function finishes execution, scoped variables are immediately discarded, and control returns to the main flow of the program

* In JS, we can define functions within other functions; this is not true of all languages

* Inner scope variables can shadow outer scope variables, observe:

```js
let number = 10;

[1, 2, 3].forEach(number => {
	console.log(number);
});
```

* In the above, we have two local variables in the inner scope with the same name; when that happens, it's called **variable shadowing**, and it prevents access to the outer scope local variable. In the above, the `console.log(number)` will use the parameter `number` and discard the outer scoped local variable. Variable shadowing also prevents us from making changes to the outer scoped `number`

* Variable shadowing isn't limited to callback functions. Whenever you have one scope nested within another, variables in the inner scope will shadow variables in the outer scope having the same name

* You want to avoid variable shadowing, since it's almost never what you intended

* Exceptions in JS halt the execution of the program immediately (thereby preventing us from moving further down the code/stops executing the rest of the code)


## Re-read: Objects vs Primitive Values

1. Every value in JS is either a primitive or an object
2. Primitives are atomic values
3. Objects are "compound" values made up of primitives or other objects
4. Primitive values are immutable, i.e. you can't add to, remove from or otherwise change a primitive value. Any operation performed on a primitive value returns a new primitive value
5. Objects are mutable, i.e. certain operations on objects can change the object in place. All variables that you have reference to that object will see that change

* Be sure to understand the difference between "pass by reference" vs. "pass by value"

## Pass by Reference vs Pass by Value

* _It's important to know what happens to function arguments._ Different languages have different strategies for this.

### What Does Pass by Value Mean?

* The concept of **"pass by value"** traditionally means that when you pass a variable to a function call, the variable is not affected after the function gets executed no matter what the function does with it (i.e. the function gets a copy of what the variable holds, not the variable itself).
	* Think of it as *extracting* the value of a statement and passing it into a function call, rather than passing the *reference name* of a statement, which _references_ the value of a statement as a whole

```js
let name = 'todd';

function changeName(name) {
	name = 'bob';				// does not re-assign the outer scope's variable
}

function anotherFunction() {
	let name = 'jim';
	changeName(name);
	console.log(name);	// => 'jim'
}

anotherFunction();
```

* In the code above, the `name` variables don't shadow each other since the `name` variable in `anotherFunction` is not accessible to the `changeName` function
* When `name` from `anotherFunction` is passed to `changeName`, are we passing it by reference or by value? It looks like we may be **passing it by value** since re-assigning the variable does not affect the variable inside `anotherFunction`.
* Had the `name` variable in `anotherFunction` changed, we would say that it is **passed by reference**

### What Does Pass by Reference Mean?

* In JS, an original object can easily be changed

```js
function capitalize(names) {
	for (let index = 0; index < names.length; index++) {
		names[index] = names[index][0].toUpperCase() + names[index].slice(1);
	}
}

let names = ['chris', 'kevin', 'naveed'];
capitalize(names);
console.log(names);		// => ['Chris', 'Kevin', 'Naveed']
```

* Looking at the above, it implies that JS is **pass by reference** since the function affected the original object. However, not all operations affect the original object

```js
function capitalize(names) {
	return names.map(name => names[0].toUpperCase() + name.slice(1));
}

let names = ['chris', 'kevin', 'naveed'];
capitalize(names);		// => ['Chris', 'Kevin', 'Naveed']
console.log(names);		// => ['chris', 'kevin', 'naveed']
```

* Looking at the above, it looks like we're back to JS being **pass by value** again, where the functions don't affect the original object

### What JS Does

* When you pass primitive values to functions, you can treat JS like **pass by value**. No operation performed on a primitive value can permanently alter the value (i.e. when you pass a primitive value to a function, no matter what that function does with that value, you won't be able to see the effects by inspecting the variable that you passed to the function)
* Recall that primitive values are _**immutable**_
* With objects, JS exhibits a combination of behaviours from both pass by reference as well as pass by value; some people call this _pass by reference of the value_ or _call by sharing_
	* When passing a variable to a function, the argument is a value which is itself a _reference_ (**call-by-sharing**)
	* Changes to the properties of objects in a function's scope are visible to the caller's scope because of shared reference
	> All you need to know: when an operation within the function mutates its argument, it affects the original object
* Functions and methods that mutate their callers are called **destructive functions or methods** (e.g. `Array.prototype.push`), as they permanently change the original arrays or objects

```js
function addNames(arr, name) {
	arr.push(name);
	// `arr = arr.push(name)` produces the same behaviour to the names array below
}

let names = ['bob', 'kim'];
addNames(names, 'jim');
console.log(names);			// => ['bob', 'kim', 'jim']
```

* Re-assignment is not a destructive operation, however
	* Mutation = descructive operation, re-assignment = non-destructive operation

```js
function addName(arr, name) {
	arr = arr.concat([name]);
}

let names = ['bob', 'kim'];
addName(names, 'jim');
console.log(names);		// => ['bob', 'kim']
```

* When we use `concat` to concatenate two arrays together, it returns a new array and doesn't mutate the original. However, when we use `push` to append a new value into an array, it does mutate the original array

### Variables as Pointers

* Re-read [Variables as Pointers](https://launchschool.com/books/javascript/read/more_stuff#variablesaspointers). Understanding this will help explain why JS exhibits the behaviours explored in this section on **Pass by Reference VS. Pass by Value**

## Coding Tips 2

* Remember to organize your code

### Should a Function Return or Display?

* **Side effects:** either outputting something or mutating an object, e.g.

```js
// side effect: logs output to the console
// returns: undefined

function total(num1, num2) {
	console.log(num1 + num2);
}

// side effect: mutates the passed-in array
// returns: updated array

function append(targetArr, valueToAppend) {
	targetArr.push(valueToAppend);
	return targetArr;
}
```

* No side effects:

```js
// side effect: none
// returns: a new number

function total(num1, num2) {
	return num1 + num2;
}
```

* If a function or method has both side effects and a meaningful return value, it's a red flag (try to have functions do one thing, and one thing only). Try to avoid writing functions that do that, as it will be challenging to use them in the future

### Name Functions Appropriately

> If you find yourself looking at a function's implementation every time you use it, it's a sign that the function needs to be improved

* A function should do one thing and be named appropriately
* If you can treat a function as a "black box", then it's a well-designed function
* You should be able to use a funtion named `total` and understand that it returns a value; likewise, you should be able to use a function named `printTotal` and realize that it returns `undefined` without looking at either implementation

* Don't mix up those concerns; don't write a function that does more than one of the following (ensure it only does _one_ of any of these):
	* mutate a value
	* output something
	* return a meaningful value

### Don't Mutate the Caller During Iteration

```js
let words = ['scooby', 'do', 'on', 'channel', 'two'];

words.forEach(word => {
	console.log(word);
	words.shift();
});
```

* In the above, since we are iterating through the array and calling `shift` in each iteration, we expect all elements to be removed by the end of the iteration. However, let's log the words array after the iteration to see whether that is indeed what happens:

```js
let words = ['scooby', 'do', 'on', 'channel', 'two'];

words.forEach(word => {
	console.log(word);
	words.shift();
});

console.log(words);		// => ['channel', 'two']
```

* The reason for the above behaviour is because we are keeping the same index position as we iterate over the words array. However, because we are removing elements from the array in each iteration, the length of the array also changes. Once we reach `words.length - 1`, we are at the end of our loop. In this case, we exit out of the loop at index 2, with an array length of 2 after shifting the array

> Don't mutate a collection while iterating through it

* You can, however, mutate the individual elements within that collection — just not the collection itself

### Variable Shadowing

* Variable shadowing occurs when you choose a local variable in an inner scope that shares the same name as a variable in an outer scope; it essentially prevents you from accessing the outer scope variable from an inner scope

```js
let name = 'johnson';

['kim', 'joe', 'sam'].forEach(name => {
	console.log(`${name} ${name}`);		// prints the value at the current index twice
});
```

### Don't Use Assignment in a Conditional

```js
// bad
let someVar;

if (someVar = getValueFromSomewhere()) {
	console.log(someVar);
}

// good
let someVar = getValueFromSomewhere();

if (someVar) {
	console.log(someVar);
}
```

* However, some experienced programmers do this often (especially programmers that have been around for a long time), e.g.:

```js
let numbers = [1, 2, 3, 4, 5];
let num;

while (num = numbers.shift()) {
	console.log(num);
}

console.log(numbers);		// []
```

* In the above, while there is nothing left to remove, `shift` returns `undefined`; this loop takes advantage of that fact to server as the loop termination condition (since `undefined` is a _falsy_ value)

* As a convention, if you must do something like the above, wrap the assignment in parenthesis, signifying that you know what you're doing and this is done on purpose (albeit, try to avoid this more often than not):

```js
let numbers = [1, 2, 3, 4, 5];
let num;

while ((num = numbers.shift())) {
	console.log(num);
}

console.log(numbers);		// []
```

### Use Underscore for Unused Callback Parameters

* *Suppose you have an array of names, and you want to print out a string for every name in the array, but you don't care about the actual names.* In those situations, use an underscore to signify that we don't care about thsi particular callback parameter

```js
let names = ['kim', 'joe', 'sam'];
names.forEach(_ => {
	console.log('Got a name!');
});
```

* Another example is when you need the second parameter but don't need the first one; you can use `_` to indicate that the first parameter is not being used by the callback:

```js
let names = ['kim', 'joe', 'sam'];
names.forEach((_, index) => {
	console.log(`${index + 1}: got a name!`);
});

// => 1: Got a name!
// => 2: Got a name!
// => 3: Got a name!
```

### Gain Experience Through Struggling

* It's less impactful to learn **"best practices"** without first learning why they are best practices
* Learn to be okay with struggling through the "bad" or sub-optimal practices first (it's not wasting time, it's gaining experience)
* Becoming a good developer means experiencing and solving a lot of weird issues :P

* i.e. don't memorize "best practices", but spend enough time programming to the point where you _understand the context for those practices_
* *Coding is like writing -- there are syntacticaly rules, but there are also creative ways of expression*


