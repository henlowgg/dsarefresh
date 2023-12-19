function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Only change code below this line

  // write a for loop to add all of the own properties of beagle to the array ownProps
  // use an ifelse statement to add either the properties to beagle or to add all the prototype properties of Dog to the array prototypeProps

  for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
  }