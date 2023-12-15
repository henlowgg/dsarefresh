let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line

// carot checks the beginning of the string

// $ checks the end

// have to use | to check for "either or" essentially

// use the global flag g

// looks like /^\s+|\s+$/g

// use the .replace() method to replace the string , use comma in the ()

// looks like hello.replace(wsRegex, "");

// means that it will check and replace the current white space before and after the words "  Hello, World!  " and replace it correctly with "Hello, World!"

