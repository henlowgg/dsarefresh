let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line


//little gotcha, you don't need to use a space or comma between the characters in the string when searching for the vowels

// [aeiou] is correct, whereas [a, e, i, o, u] is not
// also use gi at the end of it

// solution is /[aeiou]/gi