function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  // Only change code below this line
  Dog.prototype.isPrototypeOf(beagle);






  // just for personal reference , it is going to look backwards, so Thing.prototype.isPrototypeOf(littleThing); just means the littleThing is a sub object of Thing
  // it would be inheriting the Thing constructor function