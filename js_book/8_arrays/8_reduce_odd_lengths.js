// This problem is more challenging than most in this book.
// Don't worry if you can't solve it on your own.
//
// Write a function similar to the oddLengths function from Exercise 6,
// but don't use map or filter. Instead, try to use the reduce method.

function oddLengths(array) {
  return array.reduce((lengths, string) => {
    if (string.length % 2 === 1) {
      lengths.push(string.length);
    }
    return lengths;
  }, []);
}


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
