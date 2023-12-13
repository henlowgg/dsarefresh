const sum = (...args) => {
   
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }

  console.log(sum(1, 2, 3)); // 6


//   so basically all thats happening here is we are taking the array of [x, y, z] and passing it into the (x, y, z) placement by using the rest operator of (...args)