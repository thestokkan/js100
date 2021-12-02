// Does the following code produce an error? Why or why not? What output does this
// code send to the console?

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

// Answer:
// No, the code does not produce an error.
// All three components of the loop are optional.
// The counter i is updated within the body of the loop.
// Output:
// 1
// 2
// 3
// 4
// 5
