let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);


// if im correct all that needs to be done is add a carot to the beginning of the word Cal

// Also may be understanding incorrectly but if the string it is searching for is outside of square brackets then it will only search for the word at the beginning rather than the whole string