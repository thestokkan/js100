// Write a function that takes a string as an argument and returns an all-caps
// version of the string when the string is longer than 10 characters. Otherwise,
// it should return the original string. Example: change 'hello world' to
// 'HELLO WORLD', but don't change 'goodbye'.

function allCaps(string) {
  return (string.length > 10) ? string.toUpperCase() : string;
}

console.log(allCaps('hello world'));
console.log(allCaps('goodbye'));
