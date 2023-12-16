let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // Only change code below this line
  userActivity.data.online = 45;
  // now online will show the value of 45 in the console instead of 42
  // Only change code above this line
  
  console.log(userActivity);

  // basically just use dot notation to change the value of data to 45

  // cascades from top down when using dot notation, just find the correct key to use when updating a value

