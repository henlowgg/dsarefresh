function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));


//   use the .pop() method with the popped declaration
// use the .shift() method with the shifted declaration

// will look like arr.pop(); && arr.shift();