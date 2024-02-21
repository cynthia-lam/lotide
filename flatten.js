// helper functions
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// actual function here
const flatten = function(array) {
  let output = [];
  
  for (let item of array) {
    if (Array.isArray(item)) {
      for (let innerItem of item) {
        output.push(innerItem);
      }
    } else {
      output.push(item);
    }
  }
  return output;
};

//empty
assertArraysEqual(flatten([]), []);

// was flat anyway
assertArraysEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);

// has nested
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);