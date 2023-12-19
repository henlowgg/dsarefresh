function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function() {
        console.log("im a chonky boiiiii");
    },
    describe: function() {
        console.log(
            "I'm a thiiiccccc ass boi and my name is " + this.name
        );
    }
  };