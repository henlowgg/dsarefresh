let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

// using ? mark will return true or false depending on if the character is there or not if you were to run multiple tests


// so having the word "word" and using /wo?rd/ would check if the character "o" is there or not if you ran a test with "wiord" or "word"