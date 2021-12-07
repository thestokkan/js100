// What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// => [1, 4, 3]

// `array2` is initialized to the same array object as `array1`.
// `array[1] = 4` is a mutating operation that changes the array referenced
// by both `array1` and `array2`. The change is therefore reflected in `array2`.
