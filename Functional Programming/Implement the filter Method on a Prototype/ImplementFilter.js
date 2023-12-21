Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Only change code below this line
    for (let i = 0; i < this.length; i++) {
        if (Boolean(callback(this[i], i, this)) === true) {
            newArray.push(this[i]);
        }
    }
    // Only change code above this line
    return newArray;
  };

  // prob prefer to use the shorter way with a double == sign and omitting the Boolean expression


Array.prototype.myFilter = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this) == true) {
            newArray.push(this[i]);
        }
    }
    return newArray;
};