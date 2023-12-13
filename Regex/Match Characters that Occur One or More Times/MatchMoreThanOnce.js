let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);

// using the + character can check multiple times in a single word for a character or grouping of characters 


//only have to write /s+/g for this to find all iterations for the letter s with the global flag attached