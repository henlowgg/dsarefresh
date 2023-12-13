Use the Rest Parameter with Function Parameters
In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

Check out this code:
```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
```
The console would display the strings You have passed 3 arguments. and You have passed 4 arguments..

The rest parameter eliminates the need to use the arguments object and allows us to use array methods on the array of parameters passed to the function howMany.

Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.

For reference, a spread operates spreads or expands its elements in an array 
 just for future reference, spread operator will add elements of the array into the new array with the ... syntax 

// i.e. ['stuff', stuff2, ...arrayOfStuff, stuff4]

// also can pass elements of an array as arguments to a function

While the REST operator collects multiple elements and condences into a single array element

since its an array you can use array methods



