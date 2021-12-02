// Write a function that computes and returns the factorial of a number by using a
// for loop. The factorial of a positive integer n, signified by n!, is defined as
// the product of all integers between 1 and n, inclusive.
// You may assume that the argument is always a positive integer.

function factorial(num) {
  let result = 1;

  for (let counter = 1; counter <= num; counter += 1) {
    result *= counter;
  }
  return result;
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320
