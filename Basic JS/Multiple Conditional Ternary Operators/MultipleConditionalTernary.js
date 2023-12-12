function checkSign(num) {

}

checkSign(10);

// solution

function checkSign(num) {
    return (num === 0) ? "zero"
      :  (num > 0) ? "positive"
      : "negative";
      
    }
    
    checkSign(10);

// Passed:checkSign should use multiple conditional operators
// Passed:checkSign(10) should return the string positive. Note that capitalization matters
// Passed:checkSign(-12) should return the string negative. Note that capitalization matters
// Passed:checkSign(0) should return the string zero. Note that capitalization matters