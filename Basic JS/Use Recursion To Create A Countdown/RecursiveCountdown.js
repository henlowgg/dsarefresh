// Only change code below this line
function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
    }
  }
  // Only change code above this line




// Passed:countdown(-1) should return an empty array.
// Passed:countdown(10) should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// Passed:countdown(5) should return [5, 4, 3, 2, 1]
// Passed:Your code should not rely on any kind of loops (for, while or higher order functions such as forEach, map, filter, and reduce).
// Passed:You should use recursion to solve this problem.
// Passed:Global variables should not be used to cache the array.