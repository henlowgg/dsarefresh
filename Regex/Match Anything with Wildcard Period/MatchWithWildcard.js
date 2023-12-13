let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Change this line
let result = unRegex.test(exampleStr);


// using a . you can just search for one or two characters or more to match anything in strings

// i.e., /un./ for multiple cases where youd have fun, bun, run, gun, etc.