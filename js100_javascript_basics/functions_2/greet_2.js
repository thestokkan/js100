// Greet 2
//
// Change the function greet from the previous exercise, so that it takes
// two arguments: a greeting with 'Hello' as default value, and a recipient with
// 'world' as default value. The behavior should then be as follows:


function greet(greeting = 'Hello', recipient = 'World') {
  console.log(greeting + ', ' + recipient + '!');
}

greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!