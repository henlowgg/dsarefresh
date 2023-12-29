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
