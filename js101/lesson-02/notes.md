## Markdown
* See [GitHub Flavoured Markdown Spec](https://github.github.com/gfm/)

## Truthiness
* **Short-circuit operators:** `&&` and `||`, where JS stops evaluating the expression as soon as a single condition is met
* Relying on the short-circuit behaviour can be dangerous, but can sometimes be handy, i.e. checking that a value first exists before operating on it

```js
const getNameFromUser = () => 'Sample Name';
let name;

if (name = getNameFromUser()) {
  console.log(`Hi ${name}`);
} else {
  console.log('You must enter a name!');
}
```

## Pseudo-Code
* When you write _programming code_, you're writing it for other programs to process; when you write JS, you are writing for the JS engine/interpreter to process
* Pseudocode, on the other hand, is for humans -- machines or programs can't read it, so its format is relaxed, e.g.
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
* Pseudocoding allows us to **load the problem into our brain** first
* When you first approach any problem, it's important to try to understand it well, and only then can you start to dissect it, understand it, and come up with an execution path to solve it
* There are two layers to solving any problem:
  * The logical problem domain layer
  * The syntactical programming language layer
* The problem with pseudocode, however, is that we cannot verify its logic. To verify the logic, we must translate the pseudocode into programming code, which is where you can focus on programming language syntax issues without having it interrupt your flow

### Formal Pseudo-Code
* Use some keywords to help break down the program logic into concrete commands, which makes translating code more natural

| Keyword | Meaning |
|---------|---------|
| START   | start of the program |
| SET     | set a variable that we can use for later |
| GET     | retrieve input from user |
| PRINT   | display output to user |
| READ    | retrieve a value from a variable |
| IF/ELSE IF/ELSE | show conditional branches in logic |
| WHILE   | show looping logic |
| END     | end of the program |

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
* Now, it's time to improve upon the code from a lower layer -- at the programming language level, e.g. what should we do if `numbers` is `undefined`?
* **Guard clause**: a check that immediately exits the function, either with a return statement or an exception, e.g. `if (numbers === undefined) return;`
* Remember that pseudocode is a guess at the solution; there's no verification that the logic is correct, and you can't do that until you translate it to program code
* For more sophisticated problems, we need to take a piecemeal approach when writing pseudocode, then translate that pseudocode to JS

## Flowchart
* **Oval:** Star/Stop
* **Rectangle:** Processing Step
* **Parallelogram:** Input/Output
* **Diamond:** Decision
* **Circle:** Connector

> *See sample image(s) in lesson section*

* The decision component (diamond) should only have two branches. If you have a decision condition that has 3 (or more branches), use separate diamonds for each branch
* Arrows should show the logic "flow"; helping us to map out the step-by-step logic our program would need to solve a problem
* This is called the **imperative** or **procedural** way to solve a problem
* In many higher level languages, basic concepts such as iterating over a collection are _encapsulated_ into a method, e.g. `forEach`
* Using `forEach` is the _declarative_ way to solve a problem
  * Declarative meaning that expressions or declarations are used instead of statements, see [Sookocheff's Blog](https://sookocheff.com/post/fp/what-is-functional-programming/)
* Flowcharts = imperative approach
* Visually and manually loop rather than using any declarative constructs built into the language; this forces you to understand the logic much better, and also forces you to "think like a computer", thus helping you debug logical errors in your code

### A Larger Problem
* When pseudocode gets long, it becomes difficult to trust the accuracy of the logic (recall that you can only verify the logic by running the actual program code), therefore it's prudent to extract a logical grouping into a sub-process and tackle various pieces independently
* As you use pseudocode and flowcharts to help you dissect the logic of a problem, you always need to think about how detailed the chart and words should be, and what you can extrac to sub-processes; a programmer must always think about that when designing the solution to a problem
* By not worrying about the low-level details of how those sub-processes wil work, we can think at a higher level about our overall application logic, when we're ready to dive into how each of those sub-processes should work, we can create the detailed pseudocode and flowcharts for each of them
