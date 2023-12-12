Write Arrow Functions with Parameters
Just like a regular function, you can pass arguments into an arrow function.
```js
const doubler = (item) => item * 2;
doubler(4);
```
doubler(4) would return the value 8.

If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

const doubler = item => item * 2;
It is possible to pass more than one argument into an arrow function.
```js
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
```
multiplier(4, 2) would return the value 8.

Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.

------------------


Problem Explanation
Now, you are tasked at putting parameters inside arrow functions.

Hints
Hint 1
Get rid of the function keyword. Put the arrow operator.

Hint 2
Make sure you changed the var to a const.

Solutions
Solution 1 (Click to Show/Hide)
const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));



------ 

I mean that is also fine above for book solution but... nothing changed... so uh correct solution is mine, as it is more simple without having to declare:
"use strict";