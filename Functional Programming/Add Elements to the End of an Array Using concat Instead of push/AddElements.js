function nonMutatingPush(original, newItem) {
    // Only change code below this line

    // change .push to .concat, makes it so that it merges new items to the end of an array without any mutating side effects
    return original.concat(newItem);
  
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingPush(first, second);