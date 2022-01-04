// Calculate Cat Age
//
// Implement a function catAge that takes a number of human years as input and
// converts them into cat years. Cat years are calculated as follows:
//
// The first human year corresponds to 15 cat years.
// The second human year corresponds to 9 cat years.
// Every subsequent human year corresponds to 4 cat years.
//
// Example:
// catAge(0); // 0
// catAge(1); // 15
// catAge(2); // 24
// catAge(3); // 28
// catAge(4); // 32


function catAge(humanYears) {
  let firstYear = 0;
  let secondYear = 0;
  let subsequentYears = humanYears;

  if (humanYears > 0) {
    firstYear = 15;
    subsequentYears -= 1;
  }

  if (humanYears > 1) {
    secondYear = 9;
    subsequentYears -= 1;
  }

  return firstYear + secondYear + subsequentYears * 4;
}

console.log(catAge(0));
console.log(catAge(1));
console.log(catAge(2));
console.log(catAge(3));
console.log(catAge(4));

// With case statement (LS solution):
function catAge(humanYears) {
  switch(humanYears) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (humanYears - 2) * 4;
  }
}

// Note that since we are explicitly returning from each case statement, 
// it is not necessary to use break statements.