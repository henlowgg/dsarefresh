function findLongestWordLength(str) {
    let splitStr = str.split(' '); // putting space in between the parenthesis otherwise it will not split the string correctly
    let longestWord = 0; // initialize longestWord with 0 

    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i].length > longestWord) {
            longestWord = splitStr[i].length;
        }
    }
    return longestWord;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");


  // solving with for loop 