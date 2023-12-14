let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);


// add capital \S with a global flag for solution, 


// is a shortcut for this basically /[^\r\t\f\n\v]/