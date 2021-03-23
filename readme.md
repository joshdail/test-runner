# Test Runner

This is a simple demo of the native Node.js assertion library (assert).

This demo runs about 15 unit tests on three simple functions - a random string generator, a random number generator, and a string reverser.

## Entry point

The entry point for the app is index.js, which is located in the test folder.

## File structure

##### app
###### - lib.js

##### test
###### - index.js
###### - unit.js

### app
This folder contains lib.js, which has the three functions on which the unit tests are run.

### test
This folder contains index.js, the entry point for the app, which runs the tests and prints the report to the console.
This folder also contains unit.js, the file containing the actual unit tests.
