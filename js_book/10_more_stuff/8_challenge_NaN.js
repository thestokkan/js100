// Challenging Exercise
// This exercise has nothing to do with this chapter. Instead, it uses concepts you
// learned earlier in the book. If you can't figure out the answer, don't worry: this
// question can stump developers with more experience than you have.
//
// Earlier, we learned that Number.isNaN(value) returns true if value is the NaN value,
// false otherwise. You can also use Object.is(value, NaN) to make the same determination.
//
// Without using either of those methods, write a function named isNotANumber that
// returns true if the value passed to it as an argument is NaN, false if it is not.

// Answer:
// NaN is the only value that is not equal to itself
// This can be used in a conditional statement where `true` is returned only
// if the value passed in is not equal to itself.

function isNotANumber(value) {
  return value === value ? false : true;
}

console.log(isNotANumber(NaN));
console.log(isNotANumber(42));
console.log(isNotANumber(undefined));
console.log(isNotANumber(0));
console.log(isNotANumber(null));
console.log(isNotANumber(false));
console.log(isNotANumber(true));

