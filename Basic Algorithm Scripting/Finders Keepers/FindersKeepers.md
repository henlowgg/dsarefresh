Finders Keepers
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

-------------
```js
function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}
```
Code Explanation

Challenge asks us to look through array. This is done using a for loop.
The num variable is being passed into the function, so we set it to each index in our array.
The pre-defined function already checks each number for us, so if it is “true”, we return that num.
If none of the numbers in the array pass the function’s test, we return undefined.

---------------

Solution 2:

use Array.prototype.find() method

function findElement(arr, func) {
    return arr.find(func);
}

---------------

Solution 3:

Using Recursion

function findElement(arr, func) {
    if (arr.length > 0 && !func(arr[0])) {
        return findElement(arr.slice(1), func);
    } else {
        return arr[0];
    }
}