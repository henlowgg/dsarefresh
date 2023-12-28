function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
  
    return result;
  }
  
  // test here
  sumFibs(4);

  /*
Code Explanation

Create a variable to keep record of the current and previous numbers along with the result that will be returned.
Use a while loop to make sure we do not go over the number given as parameter.
We use the modulo operand to check if the current number is odd or even. If it is odd, add it to the result.
Complete the Fibonacci circle by rotating getting the next number and swapping values after.
Return the result.
*/