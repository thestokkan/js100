// Remove Last Char
//
// Create a function removeLastChar that takes a string as an argument,
// and returns the string without the last character.


function removeLastChar(str) {
  let strArray = str.split('');
  strArray.pop();
  return strArray.join('');
}

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'

// LS solution
function removeLastChar(string) {
  return string.substring(0, string.length - 1);
}