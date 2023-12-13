const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      // Change this line
      resolve("We got the data");
    } else {
        reject("Data not received")
      // Change this line
    }
  });


//   just need to add resolve and reject params

// resolve("We got the data")
// reject("Data not received")