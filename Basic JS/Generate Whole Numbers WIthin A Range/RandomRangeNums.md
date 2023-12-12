Generate Random Whole Numbers within a Range
You can generate a random whole number in the range from zero to a given number. You can also pick a different lower number for this range.

You'll call your minimum number min and your maximum number max.

This formula gives a random whole number in the range from min to max. Take a moment to read it and try to understand what this code is doing:

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin and less than or equal to myMax.

------

Solution Explanation

Math.random() generates our random number between 0 and ≈ 0.9.
Before multiplying it, it resolves the part between parenthesis (myMax - myMin + 1) because of the grouping operator ( ).
The result of that multiplication is followed by adding myMin and then “rounded” to the largest integer less than or equal to it (eg: 9.9 would result in 9)
If the values were myMin = 1, myMax= 10, one result could be the following:

Math.random() = 0.8244326990411024
(myMax - myMin + 1) = 10 - 1 + 1 -> 10
a * b = 8.244326990411024
c + myMin = 9.244326990411024
Math.floor(9.244326990411024) = 9