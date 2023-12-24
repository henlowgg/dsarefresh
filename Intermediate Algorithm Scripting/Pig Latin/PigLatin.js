function translatePigLatin(str) {
    let consRegex = /^[^aeiou]+/;
    let myCons = str.match(consRegex);

    return myCons !== null
        ? str
        .replace(consRegex, "").concat(myCons).concat("ay")
        : str.concat("way");
  }
  
  translatePigLatin("consonant");