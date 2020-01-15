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
