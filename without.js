// old helper functions 
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// NEW FUNCTION HERE-----------------------------------------------------

// This function should take in a source array and a itemsToRemove array. 
// It should return a new array with only those elements from source that 
// are not present in the itemsToRemove array.
const without = function(source, itemsToRemove) {
  let arrayWithout = [];

  for (let item of source) {
    console.log(item);
    if (!itemsToRemove.includes(item)) {
      arrayWithout.push(item);
    }
    console.log(arrayWithout);
  }

  return arrayWithout;
};

// use assertArraysEqual to test this out 
assertArraysEqual(without([1, 2, 3], [1]), [2, 3])
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])

module.exports = without;