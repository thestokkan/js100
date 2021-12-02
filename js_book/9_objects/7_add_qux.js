// Add a qux property with value 3 to the myObj object we created in the previous
// exercise. Now, examine the following code snippets:

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

// Snippet 1
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

// Snippet 2
for (let key in myObj) {
  console.log(key);
}

// Without running this code, can you determine whether these two snippets
// produce the same output? Why?

// Answer:
// Output Snippet 1:
// qux

// Output Snippet 2:
// foo
// bar
// qux

// Reason: Object.keys doesn't return inherited properties, but the for loop
// does include inherited properties in the iteration.
