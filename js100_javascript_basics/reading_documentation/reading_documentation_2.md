# 1. Style Guide

In the following code snippet, find all violations of the style guide.
Rewrite it so that it conforms with the guide.


```javascript
let ice_cream_taste = 'chocolate' // naming, semicolon
let ice_cream_density = 10        // naming, semicolon

while(ice_cream_density > 0)      // missing space, `{`
{                                 // `{`
    console.log('Drip...');       // indentation
    ice_cream_density -= 1;       // indentation
}

console.log('The '+ ice_cream_taste +' ice cream melted.'); // spaces
```


## Answer

```javascript
let iceCreamTaste = 'chocolate';
let iceCreamDensity = 10;

while (iceCreamDensity > 0) {
  console.log('Drip...');
  iceCreamDensity -= 1;
}

console.log('The ' + iceCreamTaste + ' ice cream melted.');
```

# 2. Data Types

Without looking into your notes, try to remember which primitive data types are
defined in JavaScript. Then find this information on MDN.



## Answer
There are 7 primitive data types in JavaScript:
1. `Number`
2. `String`
3. `Boolean`
4. `undefined`
5. `null`
6. `BigInt`
7. `Symbol`

# 3. Largest Number

Using the documentation, determine how we can find the largest numeric value
that can be represented in JavaScript. Write a line of code that returns this value.

## Answer
"The largest value a `Number` can hold is about 1.8E308. Values higher than that
are replaced with the special Number constant `Infinity`."

The `Number.MAX_VALUE` property represents the maximum numeric value
representable in JavaScript.

```javascript
> Number.MAX_VALUE
= 1.7976931348623157e+308
```

# 4. Arithmetic Operator Precedence

Find the MDN documentation on operator precedence, and use it to find out which
result the expression `4 * 5 + 3 ** 2 / 10` evaluates to.



## Answer
PEMDAS
1. Parentheses
2. Exponential
3. Multiplication | Division
4. Addition | Subtraction

`4 * 5 + 3 ** 2 / 10  // = 20.9`

With parentheses for clarity:
`(4 * 5) + ((3 ** 2) / 10)`

# 5. Date

Find out what `Date.now()` returns.

## Answer
`Date.now()` returns numbers of milliseconds currently passed since 1 January
1970 UTC.

This way of representing a point in time is called *Unix time* or
*epoch milliseconds*.


# 6. Which year is this?

The MDN page for `Date` lists two methods to get the year of a date.

```javascript
let today = new Date();

today.getYear();
today.getFullYear();
```

What is the difference between the two methods and which one should you use?

## Answer
`getYear`: Returns a number representing the year in the specified date,
according to local time, minus 1900. Since it does not return the full year, it
has been replaced by `getFullYear`.
`getFullYear`: Returns the (full) year of the given date, e.g. `2021`.
This is the one to use.

# 7. Argument Signatures

How many arguments does the `Array.prototype.join()` method expect?
What happens if you call it with less or more arguments?

## Answer
`join` takes one optional `separator` argument.
If called with no arguments, the `separator` takes the default value `','` (comma).
If called with more than one argument, the extra arguments are ignored.

# 8. String Concatenation

Find out how we can join two or more strings together.

## Answer
- `+` (preferred)
- `String.prototype.concat()` (discouraged)
- (`Array.prototype.join()`)

```
let string1 = 'banana';
let string2 = 'airlines';
let newString;

newString = string1 + ' ' + string2;
// = 'banana airlines'

newString = string1.concat(' ', string2)
// = 'banana airlines'

newString = [string1, string2].join(' ');
// = 'banana airlines'
```

# 9. SyntaxError

The below code raises a SyntaxError. If you run the code, you'll see the
following error message:


```shell
SyntaxError: Unexpected token &&
```
Find and read the documentation about this error on MDN. Then, fix the code.

```javascript
let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}
```

## Answer
Docs: "The JavaScript exceptions "unexpected token" occur when a specific language
construct was expected, but something else was provided. This might be a simple typo."

In this case the problem was missing parentheses around the entire condition
in the `if` statement.

# 10. TypeError

Run the following code.

```javascript
let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) {
  console.log('Tweet is too long!');
}
```

You'll see that it raises an error:

```shell
TypeError: tweet.length is not a function
```
Check the documentation of both TypeError and length, in order to find out what
causes the error.

## Answer
Docs:

"TypeError: "x" is not a function
The JavaScript exception "is not a function" occurs when there was an attempt to
call a value from a function, but the value is not actually a function."

"The length property of a String object contains the length of the string,
in UTF-16 code units."

In this case, `length` was called as a function (with parentheses).
Since `length` is a String *property* and not a function/method, the program
raised a TypeError.
