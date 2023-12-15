let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);

// so using the $ in this scenario, will capture which place the words are, if im understanding correctly, so "one two three" would be '$1 $2 $3'
// so if i wanted it backwards id put '$3 $2 $1'

// using \w+ will find the whole word to capture

// so for fixRegex it's /(\w+)\s(\w+)\s(\w+)/