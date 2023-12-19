function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line


  // make a for loop
  for (let property in canary) {
    // check if canary has its own property
    if (canary.hasOwnProperty(property)) {
        // push the property to the new array ownProps
        ownProps.push(property);
    }
  }