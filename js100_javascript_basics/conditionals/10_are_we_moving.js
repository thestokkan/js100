// Are we moving?
//
// Determine what the following code snippet logs. First solve it in your head or
// on paper, and only then run it in your JavaScript console to check the result.

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);

// Expected output:
// true


// Bonus question: Do we need the parentheses in the boolean expression or could
// we also have written the following?

let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0;

// We need the parentheses. `&&` has higher precedence than `||`, so without
// parentheses the expression is equivalent to

let isMoving = ((brakingForce < acceleration) && (speed > 0)) || (acceleration > 0);

// It would still evaluate to `true`, but the comparisons are not the same.

