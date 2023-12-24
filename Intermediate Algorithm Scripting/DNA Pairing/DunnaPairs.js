function pairElement(str) {
    const pairs = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    };
    let pairedArray = [];

    for (let nucleobase of str) {
        let pair = pairs[nucleobase.toUpperCase()];
        if (!pair) {
            console.warn(`Invalid nucleobase: ${nucleobase}`);
            continue;
        }
        pairedArray.push([nucleobase, pair]);
    }


    return pairedArray;
  }
  
  pairElement("GCG");