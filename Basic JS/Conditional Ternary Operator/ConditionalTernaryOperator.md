Use the Conditional (Ternary) Operator
The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.

The following function uses an if/else statement to check a condition:

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
This can be re-written using the conditional operator:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either the string Equal or the string Not Equal.

Problem Explanation
You need to write a function named checkEqual, which checks if the two parameters are equal.
If the parameters are equal, Equal is to be returned else Not Equal should be returned.

```js
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}
```

Code Explanation
A function checkEqual is declared, it accepts two parameters in variables a and b.
The return statement would return the value of the evaluated ternary expression.
The ternary expression checks if a and b are equal or not and returns Equal or Not Equal respectively.