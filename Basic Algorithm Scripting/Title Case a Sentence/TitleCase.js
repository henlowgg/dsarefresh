function titleCase(str) {
    let capCase = str.split(" ");
    let newTitle = [];
    for (let st in capCase) {
        newTitle[st] = capCase[st][0].toUpperCase() + capCase[st].slice(1).toLowerCase();
    }
    return newTitle.join(" ");
  }
  
  titleCase("I'm a little tea pot");

// Code Explanation
// Split the string by white spaces, and create a variable to track the updated title. Then we use a loop to turn turn the first character of the word to uppercase and the rest to lowercase. by creating concatenated string composed of the whole word in lowercase with the first character replaced by its uppercase.