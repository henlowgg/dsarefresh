function convertToRoman(num) {
    // Define the mapping of Roman numerals to numbers
    const romanNumerals = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];

    // Initialize the result string
    let result = "";

    // Iterate over the Roman numeral mappings
    for (const [roman, value] of romanNumerals) {
        // Append the Roman numeral as many times as possible
        while (num >= value) {
            result += roman;
            num -= value;
        }
    }

    return result;
}

// Test the function
console.log(convertToRoman(3549));  // MMMDXLIX


/* 
We start with a list of Roman numeral symbols and their values in descending order.
For each pair in the list, we keep appending the Roman symbol to our result as long as the remaining number is greater than or equal to the Roman numeral's value.
We subtract the value from the number each time we add a symbol.
This process repeats until the number is reduced to 0.
*/