// ...and vice versa
//
// Write code that does the reverse, starting from a nested array of pairs and
// building an object.

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

console.log(Object.fromEntries(nestedArray));
// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }