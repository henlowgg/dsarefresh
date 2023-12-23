function checkPositive(arr) {
    // Only change code below this line
  
    return arr.some(val => val > 0);
  
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);

  // checks if its true or not, ergo boolean expression


/* 
Similar to last excercise, we need to return arr.some with either a double return statement or a conditional return function checking if the nums are greater than 0 (checks if num is positive)
*/