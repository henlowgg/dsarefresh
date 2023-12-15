function raiseToPower(b, e) {
    return Math.pow(b, e);
  }
  
  let base = 2;
  let exp = 3;
  let power = raiseToPower(base, exp);
  console.log(power);

  // dumb, just wants you to change the order of base and exp

  // solution is raiseToPower(base, exp)