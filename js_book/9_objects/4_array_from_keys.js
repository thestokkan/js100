// Create an array from the keys of the object obj below, with all of the keys
// converted to uppercase. Your implementation must not mutate obj.
// The order of the array does not matter.

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

// Answer:
let objKeys = Object.keys(obj).map(key => key.toUpperCase());
console.log(objKeys);
