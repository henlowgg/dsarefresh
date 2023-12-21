// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer() {


  // Only change code above this line
}

/* 
my initial solution wrote it out as follows:

function incrementer(fixedValue, ) {
return fixedValue + 1;
}

however the actual solution is different, since i want to pass the fixedValue into the function as a parameter

written as:

function incrementer(value) {
    return value + 1;
}

var differentValue = incrementer(fixedValue); // should equal 5
console.log(fixedValue); // should print 4


*/