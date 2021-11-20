# 3.  What happens when you run the following program? Why do we get that result?

    ```
    {
      let foo = 'bar';
    }

    console.log(foo);

    ```
## Answer
    Output: Uncaught ReferenceError: foo is not defined
    Reason: The variable `foo` was declared within a block and is not accessible
    in the scope outside of that block.

# 4.  What happens when you run the following code? Why?

    ```
    const NAME = 'Victor';
    console.log('Good Morning, ' + NAME);
    console.log('Good Afternoon, ' + NAME);
    console.log('Good Evening, ' + NAME);

    NAME = 'Joe';
    console.log('Good Morning, ' + NAME);
    console.log('Good Afternoon, ' + NAME);
    console.log('Good Evening, ' + NAME);
    ```
## Answer
    Output:
      Good Morning, Victor
      Good Afternoon, Victor
      Good Evening, Victor
      Uncaught TypeError: Assignment to constant variable.

    Reason: Trying to reassign a constant, which is not possible.

# 5.   Take a look at this code snippet:

    ```
    let foo = 'bar';
    {
      let foo = 'qux';
    }

    console.log(foo);
    ```

    What does this program log to the console? Why?

## Answer
    Output: 'bar'
    Reason: The block creates a new scope for variables declared with `let`. Even if the variable `foo` declared in the outer scope is accessible within the block, a new variable with the same name is initialized within the block that shadows the outer scope variable. Outside of the block this second `foo` variable is no longer accessible and the `console.log()` statement therefore logs the value of the first variable `foo`, which is 'bar'.

# 6.  Will this program produce an error when run? Why or why not?

    ```
    const FOO = 'bar';
    {
      const FOO = 'qux';
    }

    console.log(FOO);
    ```
## Answer
    No, it will not produce an error.
    Reason: The scoping rules are the same for `let` and `const` variables, so the reasoning from problem 5. applies here as well.
