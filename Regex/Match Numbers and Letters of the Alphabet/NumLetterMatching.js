let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line


// the search functionality using a hyphen is not limited to only letters

// can use numbers too and can also use them in the same area in general 


// /[a-z0-9]/gi would give ya just that, searches for all letters and all numbers globally and without case prejudice

// i guess its fine to use gi or ig, in regards to flags , can go either way