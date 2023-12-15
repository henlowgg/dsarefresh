function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Only change code below this line
    for (let i = 0; i < len; i++) {
    // Only change code above this line
      console.log(firstFive[i]);
    }
  }
  
  countToFive();

  //change first i declaration to 0 so it starts at the 0 index
  // change the argument of i<=len to i < len so that it it will return the string equal to the amount of characters in the array, i.e., 5 characters, and it will stop at 5 instead of doing i <= len where it would give an additional character called "undefined"