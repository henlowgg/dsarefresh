function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = function() {
    return "Alas, this is a flightless bird."
}

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());


/* 
by having the function:
let penguin = new Penguin();

and by calling:
penguin.fly()

this is how JS would look for the method on the prototype chain of penguin

penguin => Is fly() defined here? No
Penguin => is fly() defined here? Yes. Execute it and stop searching.
Bird => fly() is also defined, but JS stopped searching before reaching this level.
Object => JavaScript stopped searching before reaching this level.
 */