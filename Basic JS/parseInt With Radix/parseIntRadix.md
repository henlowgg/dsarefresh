Use the parseInt Function with a Radix
The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

The function call looks like:

parseInt(string, radix);
And here's an example:

const a = parseInt("11", 2);
The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.

Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.

If you use a variable to assign the result of parseInt(str) to it, remember to return that variable.
Otherwise you can just use a return statement for your function.

In this exercise you need to “convert” a binary number into a decimal number using the radix parameter in order to specify the base on which the input number is represented on.

```js
function convertToInteger(str) {
  return parseInt(str, 2);
}
convertToInteger("10011");
```

Code Explanation
The function takes str and returns an integer instead of a string but “understanding” its a binary number instead of a decimal one thanks to the radix parameter (2).