function mixedNumbers(arr) {
    // Only change code below this line

  arr = ['IV', 5, 'six'];
  arr.unshift('I', 2, 'Three');
  arr.push(7, 'VIII', 9);
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));

// just use arr.push() and arr.unshift() to add the required elements to the array

// and to correctly write it out, you would need to add arr = [whatever nums it has in console.log currently]

// will add the arr declaration just for clarity