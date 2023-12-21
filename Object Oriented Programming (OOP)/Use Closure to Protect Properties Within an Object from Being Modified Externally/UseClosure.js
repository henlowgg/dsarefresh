function Bird() {
    // declare weight = 15 as a private variable
    let weight = 15;

    // method within the Bird function that returns the value of the variable 'weight'
    this.getWeight = function () {
        return weight;
    }
  }

  // basically making it so that we are making public properties private

  /* 
  need to change the code in line 2 to become a variable, not a this.prop

  declare weight = 15
  create method getWeight and return weight within the function
  */