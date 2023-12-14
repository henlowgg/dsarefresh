let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

// ok so this one basically just means all NON alphanumeric characters like .?! etc

// its just capital W instead of w