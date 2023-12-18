function findElement(arr, func) {
    let num = 0;
    // use a for loop
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        // the num variable is being passed into the func, so set it to each index in array
        if (func(num)) {
            // func already checks each num, so if "true", return that num
            return num;
        }
    }
    // if no num in arr pass the function's test, return undefined
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);