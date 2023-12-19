let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();

  // just change "dog" in line 4 to "this.numLegs"

  // i feel dumb now because i didn't realize "this" is literally just calling the actual parent object itself, hence why it is reuasble and you don't have to worry about changing the name of the actual object whenever



