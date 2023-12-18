function bouncer(arr) {
    //create a new empty array
    let result = [];
    // use a for loop to iterate over all elements of provided array (arr)
    for (let i = 0; i < arr.length; i++) {
        // use if statement to check if the current element is truthy or falsy
        if (arr[i]) result.push(arr[i]);
        // if the element is truthy it is pushed to the new array, resulting in the new array (result) containing only truthy elements
    }
    // return the new array
    return result;
  }
  
  bouncer([7, "ate", "", false, 9]);