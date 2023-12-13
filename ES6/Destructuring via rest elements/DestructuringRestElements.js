function removeFirstTwo(list) {
    const [a, b, ...shorterList] = list;
    return shorterList;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);


//   have to add in the code before the return statement

// cant "modify" list howeve rthats the only solution, maybe im misunderstanding the verbage used here but the solution checks out


//  const [a, b, ...shorterList] = list;
//  return shorterList;