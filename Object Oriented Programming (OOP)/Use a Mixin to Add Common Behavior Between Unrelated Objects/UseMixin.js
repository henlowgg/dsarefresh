let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Only change code below this line

  let glideMixin = function(obj) {
    obj.glide = function() {
        console.log("");
    }
  }
  glideMixin(bird);
  glideMixin(boat);

  /* 
  We want to create a mixin named glideMixin as a function that defines a method named
  glide.
  Then use glideMixin to give both bird and boat the ability to glide.

  This makes a function of glideMixin that defines the obj.glide method:
```
  let glideMixin = function(obj) {
    obj.glide = function() {
        console.log("");
    }
  }
```
  These are the functions giving both boat and bird the ability to 'glide':
```
  glideMixin(bird);
  glideMixin(boat);
```

  */