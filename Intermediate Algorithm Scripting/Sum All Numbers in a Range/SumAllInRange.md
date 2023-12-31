Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

---------

3 other solutions:

Recursive Solution
```js
function sumAll(arr) {
  const [first, last] = [...arr].sort((a, b) => a - b);
  return first !== last
    ? first + sumAll([first + 1, last])
    : first;
}

sumAll([1, 4]);
```

---------
```js
const sumAll = arr => {
  // Buckle up everything to one!
  const startNum = arr[0];
  const endNum = arr[1];

  // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
  // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
  const numCount = Math.abs(startNum - endNum) + 1;

  // Using Arithmetic Progression summing formula
  const sum = ((startNum + endNum) * numCount) / 2;
  return sum;
};
```
Code Explanation
The formula for calculating the sum of a continuous range is “(startNum + endNum) * numCount / 2”.
arr[0] and arr[1] can either be startNum or endNum, order doesn’t matter.
We can get the count of numbers in range by “Math.abs(arr[0] - arr[1]) + 1”.
Applying the formula by plugging in the numbers.

----------
```js
function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;
}

sumAll([1, 4]);
```
Code Explanation
First create a variable to store the max number between two.
The same as before for the Smallest number.
We create a accumulator variable to add the numbers.
Since the numbers might not be always in order, using max() and min() will help organize.