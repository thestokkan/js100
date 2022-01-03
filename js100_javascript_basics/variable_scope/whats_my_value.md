# What's my value? (Part 1)
What will the following code log to the console and why? Don't run it until you have tried to answer.

```javascript
console.log(greeting);

var greeting = 'Hello world!';
```

## Answer
Expected output: `undefined`
Variables declared with `var` are hoisted, which means their declaration moves to the beginning of the scope. The initialized value is not available before the line where it appears, though.

# What's my value? (Part 2)
What will the following code log to the console and why? Don't run it until you have tried to answer.

```javascript
console.log(greeting);

let greeting = 'Hello world!';
```

## Answer
Expected output: `ReferenceError: Cannot access 'greeting' before initialization`
Variables declared with `let` are not hoisted, and are therefore not available until the line where they are declared.

NB! The program is still aware of the reference!
If a reference is not declared at all, the error message is:
`ReferenceError: greeting is not defined`.

# What's my value? (Part 3)

What will the following code log to the console and why? Don't run it until you have tried to answer.


```javascript
if (true) {
  let myValue = 20;
}

console.log(myValue);
```

## Answer
Expected output: `ReferenceError: myValue is not defined`

`myValue` is declared within a block and is therefore locally scoped to the block. It is therefore unavailable in the outer scope.

# What's my value? (Part 4)
What will the following code log to the console and why? Don't run it until you have tried to answer.

```javascript
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();
```

## Answer
Expected output: 1

The condition in the `if` statement will always be truthy and the code within
the statement will therefore run. The `if` block has access to variables declared in the outer scope and therefore it can log the value of `a`.

# What's my value? (Part 5)
What will the following code log to the console and why? Don't run it until you have tried to answer.

```javascript
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();
```

## Answer
Expected output:
1
2

This is an example of *variable shadowing*.

The first declaration of `a` is scoped to the function, and is therefore
accessible within the `if` block scope.

After logging the value of the outer scope variable `a`, a new variable `a` is declared that is scoped to the block. This variable now *shadows* the value of the outer scope `a` and the value of the new `a` is logged to the console.

# What's my value? (Part 6)
What will the following code log to the console and why? Don't run it until you have tried to answer.

```javascript
let a = 5;
let b = false;
if (a > 4) {
  let b = true;
}

console.log(b);
```

## Answer
Expected output:
`false`

Explanation:
The initialization of `b` to `true` happens within the block scope in the `if` statement and is therefore not accessible in the outer scope where `b` is logged to the console. The variable `b` in the block shadows the variable `b` in the outer scope (it's a different variable).

# What's my value? (Part 7)
What will the following code log to the console and why? Don't run it until you have tried to answer.

```javascript
let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();
```

## Answer
Expected output:
1

Explanation:
The variable `a` is declared at the top level of the code and is therefore accessible everywhere, including the function body.

# What's my value? (Part 8)
What will the following code log to the console and why? Don't run it until you have tried to answer.

```javascript
let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);
```

## Answer
Expected output:
2

Explanation:
This is an example of *variable shadowing*: The block-scoped variable `a` shadows the outer scope variable `a`. When `myFunction` is called, the outer scope variable `b` is passed as an argument. The value of `b` is assigned to the block scoped variable `a` within the function body and this is the value that is logged.

# What's my value? (Part 9)
What will the following code log to the console and why? Don't run it until you have tried to answer.

```javascript
const a = 1;

function myFunction() {
  a = 2;}

myFunction(a);
```

## Answer
Expected output:
`TypeError: Assignment to constant variable.`

Explanation:
`a` is declared in the outer scope and is accessible within the block scope of the function body. Since `a` is declared as a constant, it can not be re-assigned and an exception is raised when this is attempted within the function body.

Also, `myFunction` is called with an argument, but since the function does not take arguments it is ignored.

# What's my value? (Part 10)
What will the following code log to the console and why? Don't run it until you have tried to answer.

```javascript
const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);
```

## Answer
Expected output:
`{ firstName: 'Jane', lastName: 'Doe' }`

Explanation:
`a` is declared as a constant and assigned an object in the outer scope. The variable is accessible within the function body, and although the variable itself cannot be re-assigned, the elements contained in the object can be. Dot assignment re-assigns one of the values of the object and the object is *mutated*.

## Further Exploration
One way to make an object immutable is by means of the `Object.freeze()` method. But it's important to note that this is a shallow freeze, meaning it only applies to the immediate properties of the object. If the value of those properties are objects themselves, they can still be mutated.