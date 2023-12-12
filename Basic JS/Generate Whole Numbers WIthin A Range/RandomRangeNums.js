function randomRange(myMin, myMax) {
    return 0;
};



function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
};

// Math.random() generates our random number between 0 and = 0.9
// before multiplyuing it, it resolves the part between parenthesis (myMax - myMin + 1) because of the grouping operator ( ).

// result of the multiplication is followed by adding myMin and then "rounded" to the largest integer less than or equal to it 

