const inspect = require('util').inspect;

// helper functions
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

