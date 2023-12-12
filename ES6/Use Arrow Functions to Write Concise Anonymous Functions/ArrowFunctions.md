Use Arrow Functions to Write Concise Anonymous Functions
In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

To achieve this, we often use the following syntax:
```js
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```
ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:
```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```
When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:
```js
const myFunc = () => "value";
```
This code will still return the string value by default.

Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax. Also, make sure nothing is defined using the keyword var.

------------------



Problem Explanation
Again, ES6 is all about making JavaScript more elegant, and for some, more readable.

Anonymous functions, as stated, can be created when you are sure that the function will not be called by name anywhere else.

Hints
Hint 1
Get rid of the function key word, and plug in this => arrow.

Hint 2
Did you get rid of the var keyword?

Solutions
Solution 1
const magic = () => {
  return new Date();
};
As long as you got rid of the var keyword, you’re good.

Solution 2
const magic = () => new Date();
Single line arrow function with an implicit return.