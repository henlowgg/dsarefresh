let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;


// just add /\w/g

// important to make sure youre using forward slash before w and important to put global flag g after the regex