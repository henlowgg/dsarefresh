function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);

// first create an empty array, we'll call it newArr where we store our 'chunks'
// the for loop starts at zero, increments by size each time through the loop, and stops when it reaches arr.length
// use the loop to generate numbers we can use as indices to slice the array in the right locations
// inside the loop we create each chunk using arr.slice(i, i+size).
// the slice method accepts two arguments with the first argument being the index of where the slice should start
// the second argument is where the slice should end but does not include the ending index
// add this chunk/slice to newArr with newArr.push()

// return the value of newArr once the loop completes