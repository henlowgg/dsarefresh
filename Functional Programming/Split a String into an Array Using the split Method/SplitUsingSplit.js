function splitify(str) {
    // Only change code below this line
    return str.split(/\W/)
  
    // Only change code above this line
  }
  
  splitify("Hello World,I-am code");

  /* Need to use Regex to solve it
  - str.split(/\W/)
    - Additionally, for clarity, `/\W/` Matches any non-word character. This includes spaces and punctuation, but not underscores.
    - /\W/ is equivalent to /[^A-Za-z0-9_]/
  */