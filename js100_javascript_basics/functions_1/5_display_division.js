// Display Division
//
// Determine the output that the following code will log to the console.

function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree;

// Expected output:
// ~~Uncaught ReferenceError: multiplesOfThree is not defined~~
// No output

// The function is called without parentheses and is therefore interpreted as
// a reference.
// If the function is called properly with parentheses (`multiplesOfThree();`), 
// Expected output is
// '3 / 1 = 3'
// '6 / 2 = 3'
// '9 / 3 = 3'
// ...
// '30 / 10 = 3'