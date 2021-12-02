// 2.
// Write a function, evenOrOdd, that determines whether its argument is an even
// number. If it is, the function should log 'even' to the console; otherwise,
// it should log 'odd'. For now, assume that the argument is always an integer.

// 3. 
// Let's improve our previous implementation of evenOrOdd. Add a validation check
// to ensure that the argument is an integer. If it isn't, the function should
// issue an error message and return.

function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    return "The number is not a valid integer.";
  }
  return (num % 2 === 0) ? 'even' : 'odd';
}

console.log(evenOrOdd(1));
console.log(evenOrOdd(3));
console.log(evenOrOdd(6));
console.log(evenOrOdd(0));
console.log(evenOrOdd(212));
console.log(evenOrOdd(-2));
console.log(evenOrOdd('a'));
