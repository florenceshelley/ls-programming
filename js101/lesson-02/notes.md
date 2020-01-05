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