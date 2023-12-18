Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

------------------


The Algorithm Challenge Description
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
function largestOfFour(arr) {
  return arr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
Provided test cases
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
Approach #1: Return the Largest Numbers in a Array With a For Loop
Here’s my solution, with embedded comments to help you understand it:


function largestOfFour(arr) {
   // Step 1. Create an array that will host the result of the 4 sub-arrays
   var largestNumber = [0,0,0,0];
 
   // Step 2. Create the first FOR loop that will iterate through the arrays
   for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
   /* The starting point, index 0, corresponds to the first array */
 
    // Step 3. Create the second FOR loop that will iterate through the sub-arrays
    for(var subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) {
    /* The starting point, index 0, corresponds to the first sub-array */
       
       if(arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {
          
          largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
          
       /* FOR loop cycles
          arrayIndex => i
          subArrayIndex => j
          
       Iteration in the first array
          For each iteration: arr[i][j]           largestNumber[i]          if arr[i][j] > largestNumber[i]?     then largestNumber[i] = arr[i][j]
          First iteration:    arr[0][0] => 4      largestNumber[0] => 0     4 > 0? => TRUE                       then largestNumber[0] = 4
          Second iteration:   arr[0][1] => 5      largestNumber[0] => 4     5 > 4? => TRUE                       then largestNumber[0] = 5
          Third iteration:    arr[0][2] => 1      largestNumber[0] => 5     1 > 5? => FALSE                      then largestNumber[0] = 5
          Fourth iteration:   arr[0][3] => 3      largestNumber[0] => 5     3 > 5? => FALSE                      then largestNumber[0] = 5
          Fifth iteration:    arr[0][4] => FALSE  largestNumber[0] => 5                                          largestNumber = [5,0,0,0]
       Exit the first array and continue on the second one
       Iteration in the second array
          For each iteration: arr[i][j]            largestNumber[i]           if arr[i][j] > largestNumber[i]?     then largestNumber[i] = arr[i][j]
          First iteration:    arr[1][0] => 13      largestNumber[1] => 0      13 > 0? => TRUE                      then largestNumber[1] = 13
          Second iteration:   arr[1][1] => 27      largestNumber[1] => 13     27 > 13? => TRUE                     then largestNumber[1] = 27
          Third iteration:    arr[1][2] => 18      largestNumber[1] => 27     18 > 27? => FALSE                    then largestNumber[1] = 27
          Fourth iteration:   arr[1][3] => 26      largestNumber[1] => 27     26 > 27? => FALSE                    then largestNumber[1] = 27
          Fifth iteration:    arr[1][4] => FALSE   largestNumber[1] => 27                                          largestNumber = [5,27,0,0]
       Exit the first array and continue on the third one
       Iteration in the third array
          For each iteration: arr[i][j]            largestNumber[i]           if arr[i][j] > largestNumber[i]?     then largestNumber[i] = arr[i][j]
          First iteration:    arr[2][0] => 32      largestNumber[2] => 0      32 > 0? => TRUE                      then largestNumber[2] = 32
          Second iteration:   arr[2][1] => 35      largestNumber[2] => 32     35 > 32? => TRUE                     then largestNumber[2] = 35
          Third iteration:    arr[2][2] => 37      largestNumber[2] => 35     37 > 35? => TRUE                     then largestNumber[2] = 37
          Fourth iteration:   arr[2][3] => 39      largestNumber[2] => 37     39 > 37? => TRUE                     then largestNumber[2] = 39
          Fifth iteration:    arr[2][4] => FALSE   largestNumber[2] => 39                                          largestNumber = [5,27,39,0]
       Exit the first array and continue on the fourth one
       Iteration in the fourth array
          For each iteration: arr[i][j]            largestNumber[i]           if arr[i][j] > largestNumber[i]?     then largestNumber[i] = arr[i][j]
          First iteration:    arr[3][0] => 1000    largestNumber[3] => 0      1000 > 0? => TRUE                    then largestNumber[3] = 1000
          Second iteration:   arr[3][1] => 1001    largestNumber[3] => 1000   1001 > 1000? => TRUE                 then largestNumber[3] = 1001
          Third iteration:    arr[3][2] => 857     largestNumber[3] => 1001   857 > 1001? => FALSE                 then largestNumber[3] = 1001
          Fourth iteration:   arr[3][3] => 1       largestNumber[3] => 1001   1 > 1001? => FALSE                   then largestNumber[3] = 1001
          Fifth iteration:    arr[3][4] => FALSE   largestNumber[3] => 1001                                        largestNumber = [5,27,39,1001]
       Exit the FOR loop */
        }
    }
 }
 // Step 4. Return the largest numbers of each sub-arrays
 return largestNumber; // largestNumber = [5,27,39,1001];
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
And here it is without my comments:


function largestOfFour(arr) {
   var largestNumber = [0,0,0,0];
   for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
    for(var subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) {
       if(arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {         
          largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
        }
    }
 }
 return largestNumber;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
Approach #2: Return the Largest Numbers in a Array With Built-In Functions — with map() and reduce()
For this solution, you’ll use two methods: the Array.prototype.map() method and the Array.prototype.reduce() method.

The map() method creates a new array with the results of calling a provided function on every element in this array. Using map will call a provided callback function once for each element in an array, in order, and constructs a new array from the results.
The reduce() method applies a function against an accumulator and each value of the array to reduce it to a single value.
The ternary operator is the only JavaScript operator that takes three operands. This operator is used as a shortcut for the if statement.

(currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
This can also be read as:

if (currentLargestNumber > previousLargestNumber == true) {
    return currentLargestNumber;
} else {
    return previousLargestNumber;
}
Here’s my solution, with embedded comments:


function largestOfFour(mainArray) {
  // Step 1. Map over the main arrays
  return mainArray.map(function (subArray){ // Step 3. Return the largest numbers of each sub-arrays => returns [5,27,39,1001]

    // Step 2. Grab the largest numbers for each sub-arrays with reduce() method
    return subArray.reduce(function (previousLargestNumber, currentLargestNumber) {

      return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;

      /* Map process and Reduce method cycles
      currentLargestNumber => cLN
      previousLargestNumber => pLN
      Iteration in the first array
          For each iteration:     cLN         pLN       if (cLN > pLN) ?        then cLN        else pLN
          First iteration:         4           0        4 > 0? => TRUE              4             /
          Second iteration:        5           4        5 > 4? => TRUE              5             /
          Third iteration:         1           5        1 > 5? => FALSE             /             5
          Fourth iteration:        3           5        3 > 5? => FALSE             /             5
          Fifth iteration:         /           5                                               returns 5
       Exit the first array and continue on the second one
      Iteration in the second array
        For each iteration:     cLN         pLN       if (cLN > pLN) ?        then cLN        else pLN
        First iteration:        13           0        13 > 0? => TRUE            13              /
        Second iteration:       27          13        27 > 13? => TRUE           27              /
        Third iteration:        18          27        18 > 27? => FALSE           /             27
        Fourth iteration:       26          27        26 > 27? => FALSE           /             27
        Fifth iteration:         /          27                                                returns 27
      Exit the first array and continue on the third one
      Iteration in the third array
        For each iteration:     cLN         pLN       if (cLN > pLN) ?        then cLN        else pLN
        First iteration:        32           0        32 > 0? => TRUE            32              /
        Second iteration:       35          32        35 > 32? => TRUE           35              /
        Third iteration:        37          35        37 > 35? => TRUE           37              /
        Fourth iteration:       39          37        39 > 37? => TRUE           39              /
        Fifth iteration:         /          39                                                returns 39
      Exit the first array and continue on the fourth one
      Iteration in the fourth array
        For each iteration:     cLN         pLN       if (cLN > pLN) ?        then cLN        else pLN
        First iteration:        1000         0        1000 > 0? => TRUE         1000             /
        Second iteration:       1001       1000       1001 > 1000? => TRUE      1001             /
        Third iteration:        857        1001       857 > 1001 => FALSE        /             1001
        Fourth iteration:        1         1001       1 > 1001? => FALSE         /             1001
        Fifth iteration:         /         1001                                              returns 1001
      Exit the first array and continue on the fourth one */
    }, 0); // 0 serves as the context for the first pLN in each sub array
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
And here it is without comments:


function largestOfFour(mainArray) {
  return mainArray.map(function (subArray){
    return subArray.reduce(function (previousLargestNumber, currentLargestNumber) {
      return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
    }, 0);
  });
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
Approach #3: Return the Largest Numbers in a Array With Built-In Functions — with map() and apply()
For this solution, you’ll use two methods: the Array.prototype.map() method and the Function.prototype.apply() method.

The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).
You can pass an array of arguments to a function by using the apply() method and the function will execute the items in the array.

Such functions are known as variadic functions, and they can accept any number of arguments instead of a fixed one.

The Math.max() function returns the largest of zero or more numbers, and we can pass any number of arguments.

console.log(Math.max(4,5,1,3)); // logs 5
But you can’t pass an array of numbers to the method like this​:

var num = [4,5,1,3];
console.log(Math.max(num)); // logs NaN
This is where the apply() method turns out to be useful:

var num = [4,5,1,3];
console.log(Math.max.apply(null, num)); // logs 5
Note that the first argument to apply() sets the value of ‘this’, not used in this method, so you pass null.

Now that you have a method to return the largest number in a array, you can loop through each sub-arrays with the map() method and return all largest numbers.

Here’s my solution, with embedded comments:


function largestOfFour(mainArray) {
  // Step 1. Map over the main arrays
  return mainArray.map(function(subArray) { // Step 3. Return the largest numbers of each sub-arrays => returns [5,27,39,1001]
    
    // Step 2. Return the largest numbers for each sub-arrays with Math.max() method
    return Math.max.apply(null, subArray);
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
And without comments:


function largestOfFour(mainArray) {
  return mainArray.map(function(subArray) {
    return Math.max.apply(null, subArray);
  });
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);







----------------------------------






VALID SOLUTIONS FOR PROBLEM

Problem Explanation
You will get an array that contains sub arrays of numbers and you need to return an array with the largest number from each of the sub arrays.

Hints
Hint 1
You will get an array that contains sub arrays of numbers and you need to return an array with the largest number from each of the sub arrays. You will need to keep track of the array with the answer and the largest number of each sub-array.

Hint 2
You can work with multidimensional arrays by Array[Index][SubIndex]

Hint 3
Pay close attention to the timing of the storing of variables when working with loops

Solutions
Solution 1 (Click to Show/Hide)
(Procedural approach)

function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}
Code Explanation
Create a variable to store the results as an array.
Create an outer loop to iterate through the outer array.
Create a second variable to hold the largest number and initialise it with the first number. This must be outside an inner loop so it won’t be reassigned until we find a larger number.
Create said inner loop to work with the sub-arrays.
Check if the element of the sub array is larger than the currently stored largest number. If so, then update the number in the variable.
After the inner loop, save the largest number in the corresponding position inside of the results array.
And finally return said array.
Relevant Links
For loops 1.3k
Solution 2 (Click to Show/Hide)
(Declarative approach)

function largestOfFour(arr) {
  return arr.map(function(group) {
    return group.reduce(function(prev, current) {
      return current > prev ? current : prev;
    });
  });
}
Code Explanation
we map all items within the main array to a new array using Array.prototype.map() and return this array as the final result
within each inner array, we reduce its contents down to a single value using Array.prototype.reduce()
the callback function passed to the reduce method takes the previous value and the current value and compares the two values
if the current value is higher than the previous value we set it as the new previous value for comparison with the next item within the array or returns it to the map method callback if it’s the last item
Relevant Links
Array.prototype.map() 2.8k
Array.prototype.reduce() 1.2k
Ternary Operators 836
Solution 3 (Click to Show/Hide)
(Declarative approach)

function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}
Code Explanation
TL;DR: We build a special callback function (using the Function.bind method), that works just like Math.max but also has Function.prototype.apply's ability to take arrays as its arguments.

We start by mapping through the elements inside the main array. Meaning each one of the inner arrays.
Now the need a callback function to find the max of each inner array provided by the map.
So we want to create a function that does the work of Math.max and accepts input as an array (which by it doesn’t by default).

In other words, it would be really nice and simple if this worked by itself:

Math.max([9, 43, 20, 6]); // Resulting in 43

Alas, it doesn’t.

To do the work of accepting arguments in the shape of an array, there is this Function.prototype.apply method, but it complicates things a bit by invoking the context function.
i.e. Math.max.apply(null, [9, 43, 20, 6]); would invoke something like a Max.max method. What we’re looking for… almost.

Here we’re passing null as the context of the Function.prototype.apply method as Math.max doesn’t need any context.

Since arr.map expects a callback function, not just an expression, we create a function out of the previous expression by using the Function.bind method.
Since, Function.prototype.apply is a static method of the same Function object, we can call Function.prototype.bind on Function.prototype.apply i.e. Function.prototype.apply.bind.
Now we pass the context for the Function.prototype.apply.bind call (in this case we want Math.maxso we can gain its functionality).
Since the embedded Function.prototype.apply method will also require a context as it’s 1st argument, we need to pass it a bogus context.
So, we pass null as the 2nd param to Function.prototype.apply.bind which gives a context to the Math.max method.

Since, Math.max is independent of any context, hence, it ignores the bogus context given by Function.prototype.apply method call.

Thus, our Function.prototype.apply.bind(Math.max, null) makes a new function accepting the arr.map values i.e. the inner arrays.

Relevant Links
Math.max 418
Function.prototype.apply on DevDocs 879
Function.bind on DevDocs 863
Solution 4 (Click to Show/Hide)
(Recursive approach)

function largestOfFour(arr, finalArr = []) {
  return !arr.length
    ? finalArr
    : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
}