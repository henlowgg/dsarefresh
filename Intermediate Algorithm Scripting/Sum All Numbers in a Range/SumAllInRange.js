function sumAll(arr) {
    let sumNum = 0;
        for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
            sumNum += i;
        }
    return sumNum;
  }
  
  sumAll([1, 4]);

  /*
  First method uses a for loop, and refers to the arr using Math.min and Math.max
  
  - Create a variable sumNum to store the sum of the elements
  - Starting iteration of the loop from the min element of given array and stopping when it reaches the max element of a given array
  - Using spread operator (...arr) allows passing the actual array to the function instead of one-by-one elements
  */

  