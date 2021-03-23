// jshint esversion: 6

// Test Runner

// Override the NODE_ENV variable
process.NODE_ENV = 'testing';

// Application logic for the test runner
let _app = {};

// Container for the test
_app.tests = {};

// Add unit tests as a dependency
_app.tests.unit = require('./unit.js');


_app.produceTestReport = function(limit, successes, errors) {
  console.log('');
  console.log('BEGIN TEST REPORT');
  console.log('');
  console.log('Total Tests: ', limit);
  console.log('Pass: ', successes);
  console.log('Fail: ', errors.length);
  console.log('');
  // If there are errors, print in detail
  if (errors.length > 0) {
    console.log('BEGIN TEST DETAILS');
    console.log('');
    errors.forEach(function(testError) {
      console.log('\x1b[31m%s\x1b[0m', testError.name);
      console.log(testError.error);
      console.log('');
    });
    console.log('');
    console.log('END TEST DETAILS');
  }
  console.log('');
  console.log('END TEST REPORT');
  process.exit(0);
};

// Run the test, collecting errors and successes

_app.runTests = function() {
  let errors = [];
  let successes = 0;
  let limit = _app.countTests();
  let counter = 0;
  for (let key in _app.tests) {
    if (_app.tests.hasOwnProperty(key)) {
      let subTests = _app.tests[key];
      for (let testName in subTests) {
        if (subTests.hasOwnProperty(testName)) {
          (function() {
            let tmpTestName = testName;
            let testValue = subTests[testName];
            // Call the test
            try {
              testValue(function() {
                // If it calls back without throwing, then it succeeded
                console.log('\x1b[32m%s\x1b[0m', tmpTestName);
                counter++;
                successes++;
                if (counter === limit) {
                  _app.produceTestReport(limit, successes, errors);
                }
              });
            } catch (e) {
              // If it throws, then it failed, so capture and log the error
              errors.push({
                'name': testName,
                'error': e
              });
              console.log('\x1b[31m%s\x1b[0m', tmpTestName);
              counter++;
              if (counter === limit) {
                _app.produceTestReport(limit, successes, errors);
              }
            }
          })();
        }
      }
    }
  }
};

_app.countTests = function() {
  let counter = 0;
  for (let key in _app.tests) {
    if (_app.tests.hasOwnProperty(key)) {
      let subTests = _app.tests[key];
      for (let testName in subTests) {
        if (subTests.hasOwnProperty(testName)) {
          counter++;
        }
      }
    }
  }
  return counter;
};

_app.runTests();