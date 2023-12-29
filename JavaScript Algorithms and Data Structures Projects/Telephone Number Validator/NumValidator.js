function telephoneCheck(str) {
    // Regular expression for validating US phone numbers
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

    return regex.test(str);
}

// Test the function with various phone number formats
console.log(telephoneCheck("555-555-5555"));    // true
console.log(telephoneCheck("(555)555-5555"));   // true
console.log(telephoneCheck("(555) 555-5555"));  // true
console.log(telephoneCheck("555 555 5555"));    // true
console.log(telephoneCheck("5555555555"));      // true
console.log(telephoneCheck("1 555 555 5555"));  // true
console.log(telephoneCheck("8oo-six427676;laskdjf"));  // false



/* 

In this regular expression:
^(1\s?)? optionally matches the country code (1) followed by a space or nothing.
(\(\d{3}\)|\d{3}) matches the area code either enclosed in parentheses or not.
[\s\-]? matches an optional space or dash as a separator.
\d{3} matches the first set of 3 digits.
[\s\-]? matches another optional space or dash.
\d{4}$ matches the last set of 4 digits, and $ ensures that the string ends after these digits.
This function will return true for valid US phone numbers and false for invalid formats.
*/