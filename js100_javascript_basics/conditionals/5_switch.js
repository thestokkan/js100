// Switch
//
// Take a look at the code below. Without running it, determine what it will log
// to the console. If you're not sure, refer to the MDN documentation on switch
// statements.

let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}

// Answer:
// Expected output:
// 'neigh'
// 'tweet tweet'
// '*cricket*'

// The `switch` statement does not include `break` statements. The
// execution "falls through" once a truthy condition is met, executing the
// clause in the truthy condition and all following clauses.