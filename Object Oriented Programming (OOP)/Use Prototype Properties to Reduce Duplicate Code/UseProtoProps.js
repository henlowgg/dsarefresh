function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs = 4;
  
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");

  // can place the prototype property inside or outside of the function itself

  // prototype is meant to get rid of the possiblity of multiple instances of a duplicated variable
