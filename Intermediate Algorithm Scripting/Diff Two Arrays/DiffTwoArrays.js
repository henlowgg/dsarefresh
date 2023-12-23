function diffArray(arr1, arr2) {
    const newArr = [];

    function firstArr(first, second) {
        // loop through array to find elements that don't exist in another array
        for (let i = 0; i < first.length; i++) {
            if (second.indexOf(first[i]) === -1) {
                // pushing elements unique to first to newArr
                newArr.push(first[i]);
            }
        }
    }

    firstArr(arr1, arr2);
    firstArr(arr2, arr1);

    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);