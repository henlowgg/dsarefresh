function Dog(name, color) {
    this.name = name;
    this.color = color;
    // just as a reminder, this this.numLegs will never change unless specified, its a static variable fixed at 4
    this.numLegs = 4;
}

// creates a new Dog saved in a variable terrier
let terrier = new Dog();
// passes the argument 'shitter' as the new name
terrier.name = 'shitter';
// passes the argument 'shit brown' as the new color
terrier.color = 'shit brown';

