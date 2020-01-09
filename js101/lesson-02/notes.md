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
<<<<<<< Updated upstream

- As you program more, you'll realize that there's not such thing as a program that's _"done"_
- See [What is JSON](https://developers.squarespace.com/what-is-json)
=======
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

>>>>>>> Stashed changes
