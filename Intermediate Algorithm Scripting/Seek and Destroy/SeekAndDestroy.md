Seek and Destroy
You will be provided with an initial array as the first argument to the destroyer function, followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

The function must accept an indeterminate number of arguments, also known as a variadic function. You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.

---------------

Understanding the Function: 
- `destroyer` will take an array as it's first argument
- this array is the one from which you need to remove elements
- the subsequent arguments are the values that need to be removed from this array

Handling Variadic Arguments:
- to handle an indeterminate number of arguments, use the `...` (rest) operator in the function definition , this will gather all of the arguments into the array

Removing Elements:
- need to filter out elements from the initial array that are equal to any of the values passed as additional arguments

Function to solve:

function destroyer(arr, ...valsToRemove) {
    return arr.filter(element => !valsToRemove.includes(element));
}

Breakdown:
    - `arr` is the initial array
    - `...valsToRemove` is the rest parameter that collects all additional arguments into an array `valsToRemove`
    - use `Array.prototype.filter()` to create a new array with only those elements that are not included in `valsToRemove`

Example of usage:

let initialArray = [1, 2, 3, 1, 2, 3];
let result = destroyer(initialArray, 2, 3);
console.log(result);