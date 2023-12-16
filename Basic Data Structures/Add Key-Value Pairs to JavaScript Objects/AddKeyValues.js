const foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  // Only change code below this line
  // first method by assigning bananas to the object foods using .dot notation
  foods.bananas = 13;

  // bracket notation without quotes hence making it a variable where the name of the property will be whatever the value the variable is
  const grapes = 'grapes';
  foods[grapes] = 35;

  // third method is just using straight up bracket notation 
  // bracket notation is necessary if your property has space for it or if you want to use a variable to name the property
  foods['strawberries'] = 27;

  // Only change code above this line
  
  console.log(foods);

  // will implement all 3 ways to use it, just becuase why not