// Write a program that uses a multiply function to multiply two numbers and
// returns the result. Ask the user to enter the two numbers, then output the
// numbers and result as a simple equation.

function multiply(n1, n2) {
  return n1 * n2;
}

let read = require('readline-sync');

firstNumber = parseFloat(read.question("Enter the first number: "));
secondNumber = parseFloat(read.question("Enter the second number: "));

console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);
