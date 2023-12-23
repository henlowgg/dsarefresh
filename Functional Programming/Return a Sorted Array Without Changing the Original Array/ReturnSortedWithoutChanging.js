const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  // create a new array by concatenating an empty array with the input array
const newArr = [].concat(arr);
// use the sort method to sort the new array in ascending order
    newArr.sort((a, b) => a - b); // this sorts in ascending order
    // return the sorted new array
return newArr;
  // Only change code above this line
}

nonMutatingSort(globalArray);

/* 
We start by creating a new array called `newArr` by using the `concat` method.
`[].concat(arr)` creates a new array that contains all the elements of the `arr` array
This ensures that we are not modifying the original array

Step 2: Sort the New Array

- We use the `sort` method on `newArr` to sort the elements in ascending order.
- Inside the `sort` method, we provide a comparison function `(a, b) => a - b`.
- This comparison function specifies how the elements should be sorted.
    - It subtracts `b` from `a`, which will sort the elements in ascending order.
        - [If you wanted to sort in descending order, you can use `(a, b) => b - a`.
        - The syntax remains virtually identical however now it sorts in the other direction, main point to remember here is the comparison function syntax `(a, b) => a - b`

Step 3: Return the sorted New Array

- We return the sorted `newArr`, which is a new array containing the elements of the original array sorted in ascending order.
- The original array `arr` remains unchanged.

UseCase:

const globalArray = [5, 2, 9, 1, 5];
const sortedArray = nonMutatingSort(globalArray);

console.log(sortedArray); // Output: [1, 2, 5, 5, 9]
console.log(globalArray); // Output: [5, 2, 9, 1, 5] (the original array is not modified)
*/