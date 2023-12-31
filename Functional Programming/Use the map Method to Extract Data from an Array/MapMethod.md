Use the map Method to Extract Data from an Array
So far we have learned to use pure functions to avoid side effects in a program. Also, we have seen the value in having a function only depend on its input arguments.

This is only the beginning. As its name suggests, functional programming is centered around a theory of functions.

It would make sense to be able to pass them as arguments to other functions, and return a function from another function. Functions are considered first class objects in JavaScript, which means they can be used like any other object. They can be saved in variables, stored in an object, or passed as function arguments.

Let's start with some simple array functions, which are methods on the array object prototype. In this exercise we are looking at Array.prototype.map(), or more simply map.

The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array.

When the callback is used, it is passed three arguments. The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the map method was called.

See below for an example using the map method on the users array to return a new array containing only the names of the users as elements. For simplicity, the example only uses the first argument of the callback.





----------------


Hint 1
array.prototype.map takes a function as in input and returns an array. The returned array includes elements that is processed by the function. This function takes individual elements as input.

Solutions
Solution 1
```js
const ratings = watchList.map(item => ({
  title: item["Title"],
  rating: item["imdbRating"]
}));
```
Code Explanation

Using ES6 notation, each item in array is processed to extract title and rating.
Parantheses are needed to return an object.

Solution 2
```js
const ratings = watchList.map(({ Title: title, imdbRating: rating }) => ({title, rating}));
```
Code Explanation
Using parameter destructuring, the title and rating are extracted and returned in an object. Parantheses are needed to return an object.