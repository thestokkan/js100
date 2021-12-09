// Looping over Array Elements
//
// Using the code below as a starting point, write a while loop that logs the
// elements of array at each index, and terminates after logging the last element
// of the array.

let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index += 1;
}

// Further Exploration
//
// What would the code output if array was empty? Why is that?

// Answer:
// If the array was empty, `array.length` would return `0`. Since the `while`
// condition would never be true, the code within the loop would not run and
// nothing would be logged to the console.

array = [];
index = 0;

while (index < array.length) {
  console.log(array[index]);
  index += 1;
}