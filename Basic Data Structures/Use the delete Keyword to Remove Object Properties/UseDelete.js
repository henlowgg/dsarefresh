let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // Only change code below this line
  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;
  // Only change code above this line
  
  console.log(foods);

  // prob better way to delete multiple at once but just write out delete.foods.somefood for each object that needs deleting