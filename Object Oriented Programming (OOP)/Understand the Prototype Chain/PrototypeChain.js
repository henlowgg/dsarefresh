function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);  // yields true
  
  // Fix the code below so that it evaluates to true
  Object.prototype.isPrototypeOf(Dog.prototype);


  // have to add Object.prototype

  // it's just stating that Object is the overall daddy of all other objects in prototypes because all prototypes can have a prototype

  // hence Object is daddy prototype