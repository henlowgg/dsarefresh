Falsy Bouncer
Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

--------------------


Code Explanation

We create a new empty array (result).
We use a for cycle to iterate over all elements of the provided array (arr).
We use the if statement to check if the current element is truthy or falsy.
If the element is truthy, we push it to the new array (newArray). This result in the new array (result) containing only truthy elements.
We return the new array (result).