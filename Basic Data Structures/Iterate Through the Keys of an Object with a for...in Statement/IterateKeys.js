const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(allUsers) {
    // Only change code below this line
    let result = 0;
    for (let users in allUsers) {
        if (allUsers[users].online === true) {
            result++;
        }
    }
    return result;
    // Only change code above this line
  }
  
  console.log(countOnline(users));

  // the solution isn't the same however adding it in md doc anyways just for reference

