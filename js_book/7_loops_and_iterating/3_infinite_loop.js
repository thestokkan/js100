// The following code causes an infinite loop (a loop that never stops iterating).
// Why?

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// Answer:
// The condition in the while loop is an assignment that will always return a
// truthy value and therefore causing the loop to run infinitely if not stopped
// otherwise. Since the counter is reset each time the loop runs, the break
// condition will never be true (counter is always 2 when reaching this statement).
// The loop will therefore run infinitely.
