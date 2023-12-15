Copy an Array with the Spread Operator
While slice() allows us to be selective about what elements of an array to copy, among several other useful tasks, ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this: ...

In practice, we can use the spread operator to copy an array like so:

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
thatArray equals [true, true, undefined, false, null]. thisArray remains unchanged and thatArray contains the same elements as thisArray.

We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. The function is supposed to return a new array made up of num copies of arr. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).

------------


The spread operator copies all elements into a new empty object.
while (num >= 1) {
    newArr = [...arr]
    num--;
}
The code above will copy all of the elements into newArr but will also reinitialise newArr with every new iteration of the while loop.
A new variable should first be initialised using the spread operator - let obj = [...arr]; - then this variable should be added to the newArr for every iteration of the while loop.