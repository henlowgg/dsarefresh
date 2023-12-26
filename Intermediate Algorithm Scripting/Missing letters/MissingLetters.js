function fearNotLetter(str) {
    for (let i = 1; i < str.length; i++) {
        if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
            return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
    }
  }
  
  fearNotLetter("abce");

  // loop through with a fgor loop, check the charCodeAt given position in the string, loop through it, solve