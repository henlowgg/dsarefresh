function convertCtoF(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  convertCtoF(30);


  // farenheit = (celcius * (9/5 + 32))

  // fahrenheit already defined with let

  // maybe you can just define it in one line like

  // let fahrenheit = celsius math

  // you can either use () or not, seems to work fine either way, also

  // if you wanted to solve for f to c you would just reverse the math

  // i.e., -32 first, then divide by 5/9

  // can use const or let, probably would like to use const here, since we never want the true math behind fahrenheit to never change, just the values passed into it for the math itself

  