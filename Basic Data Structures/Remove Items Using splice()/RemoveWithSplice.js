const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(0, 2);
arr.splice(1, 2);
arr.splice(2, 2);
// Only change code above this line
console.log(arr);

// sure there's a more intuitive way with an actual algorithm to splice multiple at the same time but just repeat splice function for now

// arr.splice(0, 2); - removes the 2 and 4 preceeding the first 5
// arr.splice(1, 2); - removes the 1 and 7 after the first 5
// arr.splice(2, 2); - removes the remaining 2 and 1