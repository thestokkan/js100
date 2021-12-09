# 1. Finding Documentation
What is an excellent destination when looking for JavaScript documentation?

## Answer
MDN Web Docs

# 2. Lowercase
Find out whether JavaScript has a method to lowercase a string, for example
converting 'Aloha, World!' into 'aloha, world!.

## Answer
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#changing_case

String method `String.prototype.toLowerCase()`
Example: `'HELLO'.toLowerCase(); // 'hello' `

Also `toUpperCase()`

# 3. Mountain Caps

Is there a method to capitalize a string, for example turning 'mountain' into 'Mountain'?

## Answer
Nope, no built-in method...


# 4. Array Element Access

Locate the documentation for the Array built-in object on MDN.

How can we access the element 'and' in the array ['fish', 'and', 'chips']?

## Answer
[Array - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

With index in bracket notation: `['fish', 'and', 'chips'][1]; // 'and'`

# 5. Out of Bounds

What happens if we take the array `['fish', 'and', 'chips']` and try to access
the element at index position `10`? Try this in your JavaScript console.

## Answer
No error, it just returns `undefined`
`['fish', 'and', 'chips'][10]; // undefined`

# 6. Property vs Method
What are the return values of the statements on lines 3 to 5? Refer to the MDN
documentation about the Array object for help.

```javascript
let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

trees[trees.length - 1];  // line 3
trees.pop();              // line 4
trees[trees.length - 1];  // line 5
```


## Answer
Line 1: `'palm tree'`
Line 2: `'palm tree'`
Line 3: `'sequoia'`

# 7. Type of Primitive

Look up the MDN documentation for the typeof operator. What is its return value?
Determine what the following statements will return:

```javascript
typeof 23.5;                // 'number'
typeof 'Call me Ishmael.';  // 'string'
typeof false;               // 'boolean'
typeof 0;                   // 'number'
typeof null;                // 'object'
typeof undefined;           // 'undefined'
```
## Answer
The return value of `typeof` is a string indicating the datatype of its argument.
Due to an early mistake that was never fixed, it returns `'object'` for
`typeof null`, which is wrong (it should be `null`).


# 8. Return Values

Consider the following code snippet:

```javascript
let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;
```

What will the following statements return?

```javascript
typeof tweet;   // =>  'string'
typeof words;   // =>  'object'
typeof isValid; // =>  'boolean'
```

## Answer
See above
`typeof` returns a lowercase string indicating the data type of its argument.

# 9. Method Chaining

Given the following tweet:

```javascript
let tweet = 'Starting to get the hang of it... #javascript #launchschool';
```
What will the following statements evaluate to?

```javascript
tweet.split(' ');
tweet.split(' ').reverse();
tweet.split(' ').reverse().join(' ');
```
Reference the documentation to learn about the return value of each method.

## Answer
```javascript
tweet.split(' ');
// ['Starting', 'to', 'get', 'the', 'hang', 'of', 'it...', '#javascript', '#launchschool']
tweet.split(' ').reverse();
// [
//   '#launchschool',
//   '#javascript',
//   'it...',
//   'of',
//   'hang',
//   'the',
//   'get',
//   'to',
//   'Starting'
// ]
tweet.split(' ').reverse().join(' ');
// '#launchschool #javascript it... of hang the get to Starting'
```

# 10. Equality

In your JavaScript console, execute the following two lines of code to check
whether their return values differ and if so, how. Take a look at the MDN
documentation on equality comparisons to read about how == and === differ.


```javascript
'8' == 8;   // true
'8' === 8;  // false
```

## Answer
`===` Strict equality. It returns `true` if its operands have the same value
and are of the same type.
`==` Equality. It returns `true` if its operands have the same
value. If operands are of different types, `==` will try to convert one or both
before comparison.