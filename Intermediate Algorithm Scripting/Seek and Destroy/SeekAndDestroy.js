function destroyer(arr, ...valsToRemove) {
    return arr.filter(element => !valsToRemove.includes(element));
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);