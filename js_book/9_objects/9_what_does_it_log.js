// What does the following program log to the console? Why?

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a); // 'hi'
console.log(qux);   // 'hello'

// On `line 10`, `argument1` is initialized to the object referenced by `foo` and
// `argument2` is initialized to the string referenced by `qux`.
// On `line 9`, `argument1` is used to access and reassign a property in the
// object referenced by `foo` from within the function. Since objects are
// mutable and "dot assignment" is a mutating method, the change is persistent
// in the outer scope.
// On `line 10`, `argument2` is reassigned to a new string variable via
// simple assignment. Simple assignment is not mutating, it simply points the
// variable to a different value. The value of `qux` therefore stays the same.
