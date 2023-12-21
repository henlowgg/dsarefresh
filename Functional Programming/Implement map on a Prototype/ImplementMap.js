Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Only change code below this line
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    // Only change code above this line
    return newArray;
  };

  /* 
Code Explanation

Solve this challenge using a “for” loop and this

The use of a “for” loop allows us to apply the callback function to every item in the Global array
Then push the modified items to the empty new array that is returned in the end.
  */

