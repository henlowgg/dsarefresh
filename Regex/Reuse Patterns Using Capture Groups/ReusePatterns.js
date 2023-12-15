let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/g; // Change this line
let result = reRegex.test(repeatNum);

// start with carot ^
// use (\d+) to check for numbers
// use \1 with a space at the end to check for repeats
// use \1$ to ensure multiples of numbers are returned

// make sure to use global flag at the end /stuff/g