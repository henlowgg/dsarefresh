let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin |Eleanor ).*Roosevelt/ig; // Change this line
let result = false; // Change this line
// After passing the challenge experiment with myString and see how the grouping works

//have to use .* for middle names after using the (a|b) to check for either or

// make sure to use spaces after checking the names as it will search for spaces as well ex: (a |b )

// solution

// (Franklin |Eleanor ).*Roosevelt/ig
// no space needed before the name ^^^ only after

// the g checks all and the i makes sure it doesn't matter if it's upper or lowercase

// to write a test its: let result = myRegex.test(myString); | better example for general ex: let result = a.test(b);
// testing the regex against the string essentially