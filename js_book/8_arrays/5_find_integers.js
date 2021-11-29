// Write a findIntegers function that takes an array argument and returns an
// array that contains only the integers from the input array. Use the filter
// method in your function.
// You can use Number.isInteger(value) to determine whether a numeric value is
// an integer. It returns true if the value is an integer, false otherwise.

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(array) {
  return array.filter(el => Number.isInteger(el));
}

let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
