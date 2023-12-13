let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line


// important to note, using g at the end of /change/g like that, means its a global search and can search multiple times

// you can also have multiple flags on the end of a regex i.e., /search/gi for global and ignore case

