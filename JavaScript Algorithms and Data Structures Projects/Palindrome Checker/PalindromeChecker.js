function palindrome(str) {
    let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Check if the cleaned string is the same as its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
  
  palindrome("eye");