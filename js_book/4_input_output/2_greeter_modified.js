// Modify the greeter.js program to ask for the user's first and last names
// separately, then greet the user with their full name.

let read = require('readline-sync');
let firstName = read.question("What is your first name? ");
let lastName = read.question("What is your last name? ");

console.log(`Hello, ${firstName} ${lastName}!`);
