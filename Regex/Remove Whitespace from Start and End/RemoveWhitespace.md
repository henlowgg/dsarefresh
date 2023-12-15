Remove Whitespace from Start and End
Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.

Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.

--------------

Problem Explanation
To solve this challenge you simply have to create a regex string that matches any spaces at the beginning or at the end of the string.

Hints
Hint 1
Think of how you can select substrings at the beginning or end of a string.

Hint 2
Think of how you can select whitespace

Solutions
Solution 1 (Click to Show/Hide)
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line