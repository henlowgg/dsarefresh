function rot13(str) {
    return str.split('').map(char => {
        // Check if the character is an uppercase letter
        if (char >= 'A' && char <= 'Z') {
            // Get the char code and shift it by 13 places
            let code = char.charCodeAt(0) + 13;

            // Wrap around if necessary (after 'Z')
            if (code > 90) {
                code -= 26;
            }

            return String.fromCharCode(code);
        }
        // Return non-alphabetic characters as is
        return char;
    }).join('');
}

// Test the function
console.log(rot13("SERR PBQR PNZC"));  // "FREE CODE CAMP"


/* 
We use split('') to convert the string into an array of characters.
map is used to transform each character.
For each character, we check if it is an uppercase letter. If it is, we find its char code using charCodeAt(0) and add 13.
If adding 13 goes beyond 'Z' (char code 90), we subtract 26 to wrap around to the start of the alphabet.
Finally, join('') reassembles the array of characters back into a string.
*/