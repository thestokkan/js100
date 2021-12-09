// And on and on and on
//
// The following code keeps looping forever. (You can hit Ctrl-C to stop it.)
// Why is that? Also modify it so that it stops after the first iteration.

// for (let i = 0; ; i += 1) {
//   console.log("and on");
// }

// Answer: There is no stopping condition
// Modified to stop after 1st iteration:
for (let i = 0; i < 1; i += 1) {
  console.log("and on");
}

// Another option is to use `break` statement:
for (let i = 0; ; i += 1) {
  console.log("and on");
  break;
}