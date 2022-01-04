// Dot Notation vs Bracket Notation
//
// Before running any code, determine what difference there will be in the output
// of the two code snippets below (if any).

// Snippet 1:

let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // { prefix: 'Pacific' }
// Cannot use variables with dot notation

// Snippet 2:

ocean[prefix] = 'Pacific';

console.log(ocean); // { Indian: 'Pacific' }
// The value held by `prefix` is used as property name