// Only change code below this line
// const bicycle = {
//     gear: 2,
//     setGear: function(newGear) {
//       this.gear = newGear;
//     }
//   };
//   // Only change code above this line
//   bicycle.setGear(3);
//   console.log(bicycle.gear);

//   this one simple, just remove the : function portion of the code and it will be correctly refactored

// SOLUTION

const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);
