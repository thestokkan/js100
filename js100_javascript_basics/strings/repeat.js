// Repeat
//
// Implement a function repeat that repeats an input string a given number of
// times, as shown in the example below; without using the pre-defined string
// method String.prototype.repeat().
//
// repeat(3, 'ha'); // 'hahaha'

function repeat(times, string) {
  let repeatString = string;

  for (let i = 1; i < times; i++) {
    repeatString += string;
  }

  console.log(repeatString);
}

repeat(3, 'ha');