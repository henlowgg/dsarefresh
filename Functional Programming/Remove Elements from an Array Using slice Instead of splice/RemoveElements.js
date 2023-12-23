function nonMutatingSplice(cities) {

    // change splice to slice and add 0 to the beginning of the the location within the array to start the slice
    return cities.slice(0, 3);
  }

/* 
The difference between splice and slice method is that the slice method 
does not mutate the original array, but returns a new one
The slice method takes 2 two arguments for the indices to begin and end the 
slice (the end is non-inclusive)
If you do not want to mutate the original array, you can use the slice method
*/

