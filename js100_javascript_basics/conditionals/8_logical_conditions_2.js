// Logical Conditions 2
//
// Predict the output of the following code:

if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
}

// Expected output:
// 'No...'

// The condition evaluates to `false` since `&&` returns `true` only if both
// its operands are truthy.