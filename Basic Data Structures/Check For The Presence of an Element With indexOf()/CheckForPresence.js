function quickCheck(arr, elem) {
    // Only change code below this line
  if (arr.indexOf(elem) >= 0 ) {
    return true;
  }
  return false;
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

  // use indexOf() to check really quick if there is even somehting on an array

  // like 4 different ways to solve this, also you can use else "if you wanted to" just for clarity for someone else reading it , but is not necessary as it is built in that the second return is an else statement



// - A simple if-statement can be used to check whether or not the value returned by the indexOf() function is less than 0.
// - Once the value is discovered then you can return either true or false.
// - demonstrates how a simple if-statement can return the correct result.

