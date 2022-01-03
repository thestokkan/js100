// Equality
//
// Predict the output of the below code. When you run the code, do you see what
// you expected? Why or why not?

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

// Expected output: `false`
// Yes, I see what I expected. When comparing objects, the strict equality
// operator (`===`) returns `true` if its operands occupy the same space in memory.
// The values (arrays) of `array1` and `array2` contain the same values but they
// are not the same object, i.e. they do not occupy the same space in memory.