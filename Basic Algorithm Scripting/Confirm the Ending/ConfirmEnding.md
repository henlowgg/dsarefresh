Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

------------------



function confirmEnding(string, target) {
  return string;
}
confirmEnding("Bastian", "n");
Provided test cases
confirmEnding("Bastian", "n") should return true.

confirmEnding("Connor", "n") should return false.

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].

confirmEnding("He has to give me a new name", "name")should return true.
confirmEnding("Open sesame", "same") should return true.

confirmEnding("Open sesame", "pen") should return false.

confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.

Do not use the built-in method .endsWith() to solve the challenge.
Approach #1: Confirm the Ending of a String With Built-In Functions — with substr()
For this solution, you’ll use the String.prototype.substr() method:

The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.
Why are you using string.substr(-target.length)?

If the target.length is negative, the substr() method will start the counting from the end of the string, which is what you want in this code challenge.

You don’t want to use string.substr(-1) to get the last element of the string, because if the target is longer than one letter:

confirmEnding("Open sesame", "same")
…the target won’t return at all.

So here string.substr(-target.length) will get the last index of the string ‘Bastian’ which is ‘n’.

Then you check whether string.substr(-target.length) equals the target (true or false).


function confirmEnding(string, target) {
  // Step 1. Use the substr method
  if (string.substr(-target.length) === target) {
  
  // What does "if (string.substr(-target.length) === target)" represents?
  // The string is 'Bastian' and the target is 'n' 
  // target.length = 1 so -target.length = -1
  // if ('Bastian'.substr(-1) === 'n')
  // if ('n' === 'n')
  
  // Step 2. Return a boolean (true or false)
    return true;
  } else {
    return false;
  }
}

confirmEnding('Bastian', 'n');
Without comments:


function confirmEnding(string, target) {
  if (string.substr(-target.length) === target) {
    return true;
  } else {
    return false;
  }
}
confirmEnding('Bastian', 'n');
You can use a ternary operator as a shortcut for the if statement:

(string.substr(-target.length) === target) ? true : false;
This can be read as:

if (string.substr(-target.length) === target) {
    return true;
} else {
    return false;
}
You then return the ternary operator in your function:


function confirmEnding(string, target) {
  return (string.substr(-target.length) === target) ? true : false;
}
confirmEnding('Bastian', 'n');
You can also refactor your code to make it more succinct by just returning the condition:

function confirmEnding(string, target) {
  return string.substr(-target.length) === target;
}
confirmEnding('Bastian', 'n');
Approach #2: Confirm the Ending of a String With Built-In Functions — with endsWith()
For this solution, you’ll use the String.prototype.endsWith() method:

The endsWith() method determines whether a string ends with the characters of another string, returning true or false as appropriate. This method is case-sensitive.
function confirmEnding(string, target) {
  // We return the method with the target as a parameter
  // The result will be a boolean (true/false)
  return string.endsWith(target); // 'Bastian'.endsWith('n')
}
confirmEnding('Bastian', 'n');

----------- 

# Actual Solutions

Confirm the Ending 817
Solutions

Solution 1
(Declarative approach)
```js
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  return str.slice(str.length - target.length) === target;
}

confirmEnding("He has to give me a new name", "name");
```
Code Explanation
First we use the slice method copy the string.
In order to get the last characters in str equivalent to the target's length we use the slice method.
The first parameter inside the slice method is the starting index and the second parameter would be the ending index.
For example str.slice(10, 17) would return give me.
In this case we only include one parameter which it will copy everything from the starting index.
We substract the length of str and the length of target, that way, we shall get the last remaining characters equivalent to the target's length.
Finally we compare the return result of slice to target and check if they have the same characters.
Relevant Links
String.prototype.slice() 2.8k

Solution 2
(using Regular Expression)
```js
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  let re = new RegExp(target + "$", "i");

  return re.test(str);
}

console.log(confirmEnding("Bastian", "n"));
```
# Code Explanation

We need to make a pattern from the target variable that exists at the end of the string str.
Since we will use a variable that will change the pattern each time the function is called, we will use the constructor of the regular expression object new RegExp(pattern[, flags]), so we start with: new RegExp(target).
Then we have to check at the end of the string, so we concatenate to the target variable the $ character to match the end: new RegExp(target+'$').
We use the flag i to ignore the case of the pattern and we have our completed RegExp: new RegExp(target+'$','i'), or we can ommit the flag entirely.
Finally, we are using our regular expression with the test method to the given string, to check if the string ends with the pattern and return true or false accordingly.
Relevant Links
RegExp 1.2k
RegExp.prototype.test() 551

Solution 3

function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}

confirmEnding("Bastian", "n");

Code Explanation
If a negative number is provided as the first parameter to slice() , the offset is taken backwards from the end of the string.