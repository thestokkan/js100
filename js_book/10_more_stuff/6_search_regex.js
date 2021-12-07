// Write a function that searches an array of strings for every element that matches
// the regular expression given by its argument. The function should return all
// matching elements in an array.
//
// Example


function allMatches(array, pattern) {
  return array.filter(word => pattern.test(word));
}


let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
