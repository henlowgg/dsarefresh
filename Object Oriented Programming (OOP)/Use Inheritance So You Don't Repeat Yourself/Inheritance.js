function Animal() { };
  // moved Animal function to the top since it is a function that will be called more than once
  Animal.prototype = {
    constructor: Animal,
    // by adding the eat function here, it will be inherited each time by the other constructors without having to specify the function , thus keeping code DRY
    eat: function () {
        console.log("nom nom nom");
    }
  };

function Cat(name) {
    this.name = name;
  };
  
  Cat.prototype = {
    constructor: Cat,
  };
  
  function Bear(name) {
    this.name = name;
  };
  
  Bear.prototype = {
    constructor: Bear,
  };
  
  

  // principle in programming: Don't Repeat Yourself (DRY)

  // keep code DRY

  // this is basically showing to have a parent function that houses information or a function that is going to be repeated multiple times throughout the code so that you don't have to keep repeating the function itself

