//What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}


// The function takes a string as input and returns an array of numbers.
//    `split(' ')` splits the string at spaces, which returns an array of the split strings.
//    `reverse` is called on the return value, wich returns the array in the reverse order.
//    `map` is then called on the reversed array of strings, returning an array of
//    the string lengths. This is the return value of the function.

// In short: The function converts a string into an array of words, reverses that
// array, and then returns a new array with the lengths of the words.