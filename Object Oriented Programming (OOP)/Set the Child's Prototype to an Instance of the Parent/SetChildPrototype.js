function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
// now beagle inhjerits all of Animal prototypes including the eat method
// just means it will inherit it without a problem now
let beagle = new Dog();