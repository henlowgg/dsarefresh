let haStr = "Hazzzzah";
let haRegex = /Hazz{3,}ah/; // Change this line
let result = haRegex.test(haStr);


// tried to be tricky but you have to have 1 less than the number your parameters are giving for example if you want 4 or more times, your have to use {3,} 