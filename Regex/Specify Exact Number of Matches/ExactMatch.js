let timStr = "Timmmmber";
let timRegex = /tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

// ok so yeah not having a comma will search for exact amount of times you want to find that character so if you want to search for j 4 times it would be j{4}

