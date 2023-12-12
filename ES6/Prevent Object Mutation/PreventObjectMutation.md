Prevent Object Mutation
As seen in the previous challenge, const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function - Object.freeze - to prevent data mutation.

Any attempt at changing the object will be rejected, with an error thrown if the script is running in strict mode.
```js
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 
```
The obj.review and obj.newProp assignments will result in errors, because our editor runs in strict mode by default, and the console will display the value { name: "FreeCodeCamp", review: "Awesome" }.

In this challenge you are going to use Object.freeze to prevent mathematical constants from changing. You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.

------------------------


At first thought solution would be to mimic the example by freezing the function itself i.e., (freezeObj) but then realized it literally tells you to just freeze MATH_CONSTANTS so..
```js
Object.freeze(MATH_CONSTANTS);
```



----------------


FULL EXPLANATION 
```js
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```
Code Explanation
By using Object.freeze() on MATH_CONSTANTS we can avoid manipulating it.
