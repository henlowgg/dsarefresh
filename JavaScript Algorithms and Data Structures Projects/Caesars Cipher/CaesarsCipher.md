Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

---------------



Iterate over each character in the string: For each character, we need to determine if it is an uppercase letter.
Shift the letter: If the character is a letter, shift it by 13 places in the alphabet.
Handle wrapping around the alphabet: If the shift goes past 'Z', it should wrap around to the beginning of the alphabet.
Preserve non-alphabetic characters: Non-alphabetic characters should remain unchanged.