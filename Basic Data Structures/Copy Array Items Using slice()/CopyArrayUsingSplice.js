function forecast(arr) {
    // Only change code below this line
  
    return arr.slice(2, 4);
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// note that slice never modifies the original array, it just copies it and spits out a new array depending on the parameters passed

// slice only takes 2 parameters

// pass in the parameters (2, 4) in the slice method and return it

// side note, you make a brand new array with this easily by naming a new variable before passing the .slice() method i.e., let randomFknArrName = originalArr.slice(0, 2);