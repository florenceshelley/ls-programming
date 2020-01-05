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
