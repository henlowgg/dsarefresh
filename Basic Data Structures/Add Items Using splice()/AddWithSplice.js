function htmlColorNames(arr) {
    // Only change code below this line
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

  //gotta remember that the second argument passed with splice will be different from a zero index so getting rid of the amount you want to get rid of is truly 3 if you want to get rid of 3

  // can solve with (0, 2, 'DarkSalmon', 'BlanchedAlmond');