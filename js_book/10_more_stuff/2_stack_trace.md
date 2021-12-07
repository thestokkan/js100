# What do the following error message and stack trace tell you?

```javascript
$ node exercise2.js
/Users/wolfy/tmp/exercise2.js:4
  console.log(greeting);
              ^

ReferenceError: greeting is not defined
    at hello (/Users/wolfy/tmp/exercise2.js:4:15)
    at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
    at startExecution (internal/bootstrap/node.js:276:5)
```

## Answer
The stack trace tells me that an exception is raised due to a `ReferenceError`,
and that `greeting is not defined`. A function `hello` from the file `exercise2.js`
tries to log a variable `greeting` on line 4, column 15. The trace further tells
me that the function is called from an anonymous function at line 13, column 1,
which, in this case, means it's called from the global scope.