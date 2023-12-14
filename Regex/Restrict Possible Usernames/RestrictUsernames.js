let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);

// check md doc for better explanation of both solutions, but basically have to write out the entire thing, using [][] at the begninning to ensure at least the first two characters are let