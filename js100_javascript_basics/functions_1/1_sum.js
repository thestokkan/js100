// Sum
//
// Examine the example function invocation below. Write the function sum,
// such that it accepts two arguments and returns the sum of its arguments.
// You may assume that the function arguments will always be numbers.

function sum(num1, num2) {
  return num1 + num2;
}

sum(22, 10); // 32
console.log(sum(22, 10));

// With arrow function
let sum2 = (num1, num2) => num1 + num2;
console.log(sum2(22, 10));