let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

// so using ?= checks for how many characters 
// in this case ?=\w{6} checks to make sure there are more than 5 characters used
// and ?=\w*{2} makes sure there are at least 2 consecutive digits anywhere within it

