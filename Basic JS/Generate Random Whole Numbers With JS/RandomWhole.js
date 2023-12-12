function randomWholeNum() {
    return Math.random();
  }

//   return a random whole number in the range from 0-9

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum);

// basically 0-9 means just use 10 when writing out Math.random() * x

// same thing will go for everthing else when calling Math.random(), then multiplying
// the result by 20, then passing the value to Math.floor() to round the value down to the nearest whole number

