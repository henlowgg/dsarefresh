let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line


// bascially can match all characters that are not explicitly specified

// /[^aeiou0-9]/ig