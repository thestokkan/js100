// Challenging Exercise
// This exercise has nothing to do with this chapter. Instead, it uses concepts you
// learned earlier in the book. If you can't figure out the answer, don't worry:
// this question can stump developers with more experience than you have.
//
// Consider this code:
//
> let x = "5"
> x = x + 1
= "51"
//
// Now, consider this code:
//
> let y = "5"
> y++
//
// What gets returned by y++ in the second snippet, and why?

// Answer:

// `y++` returns `5`
// `++` applied to a string coerces the string to a number before incrementing
// it with `1`. The return value is `5` because `++` returns the original value.
// The value of `y` after `y++` has run is `6`.
