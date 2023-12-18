Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

Mutations 201
Problem Explanation
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array…
Relevant Links
String.indexOf()
Hints
Hint 1
If everything is lowercase it will be easier to compare.
Hint 2
Our strings might be easier to work with if they were arrays of characters.
Hint 3
A loop might help. Use indexOf() to check if the letter of the second word is on the first.
Solutions
Solution 1 (Click to Show/Hide)
Procedural

function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
Code Explanation
First we make the two strings in the array lowercase. test will hold what we are looking for in target.
Then we loop through our test characters and if any of them is not found we return false.

If they are all found, the loop will finish without returning anything and we get to return true.

Relevant Links
String.toLowerCase() 552
For loops 458
Solution 2 (Click to Show/Hide)
Declarative

function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}
Code Explanation
Grab the second string, lowercase and turn it into an array; then make sure every one of its letters is a part of the lowercased first string.

Every will basically give you letter by letter to compare, which we do by using indexOf on the first string. indexOf will give you -1 if the current letter is missing. We check that not to be the case, for if this happens even once every will be false.

Relevant Links
Array.split() 686
Array.every() 2.5k
Solution 3 (Click to Show/Hide)
Recursive

function mutation([ target, test ], i = 0) {
  target = target.toLowerCase();
  test = test.toLowerCase();
  return i >= test.length
    ? true
    : !target.includes(test[i])
      ? false
      : mutation([ target, test ], i + 1);
}
Note that nesting ternaries this deeply is typically not recommended in professional code.

Solution 4 (Click to Show/Hide)
function mutation([elem1, elem2]) {
  const regex = new RegExp(`[^${elem1}]`, 'i');
  return !regex.test(elem2);
}
Code Explanation
Desconstruct the two elements of the array passed to the function and create a regular expression using the RegExp() constructor using a negated character set of all the first element’s characters. Adding the i flag makes the match case insensitive. The function returns the negated Boolean value of testing the regex with element two’s characters.