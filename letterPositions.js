// HELPER FUNCTIONS
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// FUNCTION IMPLEMENTATION HERE
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (!results.hasOwnProperty(sentence[i])) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello")["h"], [0]);
assertArraysEqual(letterPositions("hello")["e"], [1]);
assertArraysEqual(letterPositions("hello")["l"], [2, 3]);
assertArraysEqual(letterPositions("hello")["o"], [4]);
assertArraysEqual(letterPositions("eabcde")["e"], [0, 5]);
assertArraysEqual(letterPositions("eeeeee")["e"], [0, 1, 2, 3, 4, 5]);

module.exports = letterPositions;