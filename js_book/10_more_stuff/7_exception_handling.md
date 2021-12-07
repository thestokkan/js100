# 7. What is exception handling and what problem does it solve?

## Answer:
Exception handling is the capture of errors raised by the program to handle the
errors gracefully and prevent the program from crashing or introducing bugs.
Exceptions are caught using the `catch/try` statement where code in the `catch`
block determines what to do if the code in the `catch` block fails.

Exception handling should only be used in cases that are unpredictable and hard to control,
such as connecting to a remote site.