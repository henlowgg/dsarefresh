const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

//   also using this "use strict"; statement is kind of redundant since it runs in strict mode by default
  "use strict";
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  console.log(s)
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();