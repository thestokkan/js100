// What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar); // 1

// The code logs 1 to the console. Executing the foo function does not affect
// the output, that is, it does not change the value of the outer scope 'bar'
// variable. Within the function definition, the outer scope variable is
// accessible. However, a local variable named 'bar' is declared within the
// function definition. This variable is scoped to the function definition and
// shadows the outer scope 'bar' variable, making it inaccessible inside the
// function def.
