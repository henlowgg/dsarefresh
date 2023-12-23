function checkPositive(arr) {
    // Only change code below this line
  
    return arr.every(val => val > 0);
  
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);

  /* either double return, or check in single line with conditional function => */

  // for the purpose of clarity, ill write out my initial answer, and what i would prefer to have done


  /* 
  function checkPositive(arr) {
    return arr.every(function(currentValue) {
        return currentValue > 0;
    });
  };

  checkPositive([1, 2, 3, -4, 5]);
  */

  /* 
  function checkPositive(arr) {
    return arr.every(val => val > 0);
  }
  checkPositive([1, 2, 3, -4, 5]);
  */