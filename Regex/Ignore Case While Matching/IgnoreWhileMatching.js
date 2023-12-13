let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);


// most important thing to note is just that simply adding i after // makes it so that when searching with regex you can ignore upper, camel, or lower case


// so for example /change/i would search for any instance of 'change' regardless of it's casing
