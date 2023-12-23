function add(x) {
    // Only change code below this line
  return function(y) {
    return function(z) {
        return x + y + z;
    };
  };
  
    // Only change code above this line
  }
  
  add(10)(20)(30);

  // just need to add return functions for (y) and (z) respectively and then return the sum of xyz

  /* 
  alternatively you can use conditional arrow function in place of multiple returns
  
  function add(x) {
    return y => z => x + y + z;
  }
  add(10)(20)(30);



  all that `return y => z` means is that its a return function, i.e.,:
  return function(y) {
    return function(z) {

    }
  }
  */