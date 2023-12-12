var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
  };
  
  console.log(myConcat([1, 2], [3, 4, 5]));

//   basically just need to remove the var, change to const, remove keyword function
// keep arr1.concat(arr2); the exact same way its already written
// make declaration, pass arguments


//  SOLUTION

const myConcat = (arr1, arr2) => arr1.concat(arr2);