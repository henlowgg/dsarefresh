const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  makeServerRequest.then(result => {
    console.log(result);
  });

  // you can just write a .thn method after the code has already ran so that it isn't runing indefinitely


  //ex;

//   makeServerRequest.then(result => { console.log(result); });