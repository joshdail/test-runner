// jshint esversion: 6

let app = {};

// Default is a 10 character lowercase string
app.generateRandomString = function(numChars, allCaps) {
  numChars = typeof(numChars) === 'number' && numChars > 0 && numChars % 1 === 0 ? numChars : 10;
  let str = '';
  for (let i = 0; i < numChars; i++) {
    let possibleCharacters = 'abcdefghijklmnopqrstuvwxyz';
    let randomCharacter = possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    str += randomCharacter;
  }
  return typeof(allCaps) === 'boolean' && allCaps === true ? str.toUpperCase() : str;
};

// Default is a number between one and ten
app.generateRandomNumber = function(min, max) {
  min = typeof(min) === 'number' ? min : 0;
  max = typeof(max) === 'number' && max > min ? max : min + 10;
  return Math.floor(Math.random() * max) + min;
};

app.reverseString = function(str) {
  str = typeof(str) === 'string' && str.trim().length > 0 ? str : '';
  let reverse = '';
  if (str.length > 0) {
    for (let i = str.length - 1; i >= 0; i--) {
      reverse += str.charAt(i);
    }
  }
  return reverse;
};

module.exports = app;