function whatIsInAName(collection, source) {
    const collectionMatches = [];

    for (let i = 0; i < collection.length; i++) {
        let foundMisMatch = false;
            for (const sourceProp in source) {
                if (collection[i][sourceProp] !== source[sourceProp]) {
                    foundMisMatch = true;
                }
            }
        if (!foundMisMatch) {
            collectionMatches.push(collection[i]);
        }
    }
    return collectionMatches;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });