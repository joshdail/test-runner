// jshint esversion: 6

const assert = require('assert');
const app = require('./../app/lib.js');

let unit = {};

// Tests for generateRandomString

unit['generateRandomString generates a string of 5 lowercase characters if 5 and false are submitted'] = function(done) {
  let randomString = app.generateRandomString(5, false);
  assert.equal(typeof(randomString), 'string');
  assert.equal(randomString.length, 5);
  assert.equal(randomString, randomString.toLowerCase());
  done();
};

unit['generateRandomString generates a string of 5 uppercase characters if 5 and true are submitted'] = function(done) {
  let randomString = app.generateRandomString(5, true);
  assert.equal(typeof(randomString), 'string');
  assert.equal(randomString.length, 5);
  assert.equal(randomString, randomString.toUpperCase());
  done();
};

unit['generateRandomString generates a string of 10 uppercase characters if 0 and true are submitted'] = function(done) {
  let randomString = app.generateRandomString(0, true);
  assert.equal(typeof(randomString), 'string');
  assert.equal(randomString.length, 10);
  assert.equal(randomString, randomString.toUpperCase());
  done();
};

unit['generateRandomString generates a string of 10 uppercase characters if a non-number and true are submitted'] = function(done) {
  let randomString = app.generateRandomString('not a number', true);
  assert.equal(typeof(randomString), 'string');
  assert.equal(randomString.length, 10);
  assert.equal(randomString, randomString.toUpperCase());
  done();
};

unit['generateRandomString generates a string of 10 uppercase characters if a decimal number and true are submitted'] = function(done) {
  let randomString = app.generateRandomString(3.33, true);
  assert.equal(typeof(randomString), 'string');
  assert.equal(randomString.length, 10);
  assert.equal(randomString, randomString.toUpperCase());
  done();
};

unit['generateRandomString generates a string of 10 lowercase characters if no parameters are submitted'] = function(done) {
  let randomString = app.generateRandomString();
  assert.equal(typeof(randomString), 'string');
  assert.equal(randomString.length, 10);
  assert.equal(randomString, randomString.toLowerCase());
  done();
};

unit['generateRandomString generates a string of 10 lowercase characters if 0 and a non-boolean value are submitted'] = function(done) {
  let randomString = app.generateRandomString(0, 'not a boolean');
  assert.equal(typeof(randomString), 'string');
  assert.equal(randomString.length, 10);
  assert.equal(randomString, randomString.toLowerCase());
  done();
};

unit['generateRandomString generates a string of 10 lowercase characters if a non-number and a non-boolean value are submitted'] = function(done) {
  let randomString = app.generateRandomString('not a number', 'not a boolean');
  assert.equal(typeof(randomString), 'string');
  assert.equal(randomString.length, 10);
  assert.equal(randomString, randomString.toLowerCase());
  done();
};

// Tests for generateRandomNumber

unit['generateRandomNumber generates a random number between -5 and 5 if -5 and 5 are submitted as max and min values'] = function(done) {
  let randomNumber = app.generateRandomNumber(-5, 5);
  assert.ok(randomNumber >= -5 && randomNumber <= 5);
  done();
};

unit['generateRandomNumber generates a random number between 0 and 10 if nothing is submitted as max and min values'] = function(done) {
  let randomNumber = app.generateRandomNumber();
  assert.ok(randomNumber >= 0 && randomNumber <= 10);
  done();
};

unit['generateRandomNumber generates a random number between 0 and 10 if min value submitted is greater than max value submitted'] = function(done) {
  let randomNumber = app.generateRandomNumber();
  assert.ok(randomNumber >= 0 && randomNumber <= 10);
  done();
};

unit['generateRandomNumber generates a random number between 0 and 10 if non number values are submitted as min and max values'] = function(done) {
  let randomNumber = app.generateRandomNumber('not a number', 'also not a number');
  assert.ok(randomNumber >= 0 && randomNumber <= 10);
  done();
};

// Tests for reverseString

unit['reverseString returns the string "kcliS" if "Slick" is submitted'] = function(done) {
  let reverse = app.reverseString('Slick');
  assert.equal(reverse, 'kcilS');
  done();
};

unit['reverseString returns an empty string if nothing is submitted'] = function(done) {
  let reverse = app.reverseString();
  assert.ok(typeof(reverse) === 'string');
  assert.ok(reverse.length === 0);
  done();
};

unit['reverseString returns an empty string if a non-string value is submitted'] = function(done) {
  let reverse = app.reverseString(null);
  assert.ok(typeof(reverse) === 'string');
  assert.ok(reverse.length === 0);
  done();
};

module.exports = unit;