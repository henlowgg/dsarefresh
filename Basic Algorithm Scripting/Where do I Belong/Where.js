function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) return i;
    }
    return arr.length;
  }
  
  getIndexToIns([40, 60], 50);

  // first need to sort the array from lowest to biggest 
  // once sorted, check for the first number that is bigger and return the index (where it's located on the array)
  // if there is no index for that number then deal with that case as well