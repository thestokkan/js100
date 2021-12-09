// Do...While
//
// What is the difference between the following two code snippets? Check the MDN
// documentation on while and do...while.


let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}


let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);

// Answer:
// The first snippet is a `while` loop: it checks the condition before any
// code is run. In this case, the condition is false from the start and the
// code within the block is not run.
// The second snippet is a `do..while` loop. It will run once before checking
// the condition, then continue running only if the condition evaluates to
// `true`. In this case, 'Woooot!' is logged to the console once. After that,
// the condition is checked. Since it is false, the code will not run again.