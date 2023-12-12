function checkScope() {
    var i = 'function scope';
    if (true) {
      i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

//   uhhh just have to add let to both i declarations and remove the var i.e.;
//  let i = 'function scope';
//  let i = 'block scope';