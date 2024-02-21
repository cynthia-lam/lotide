// helper functions
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// FUNCTION IMPLEMENTATION
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

//3 test cases

const test1 = [];
assertArraysEqual(map(test1, num => num[0]), []);

const test2 = [2.2, 1.1, 3.3, 3.9, 4.0];
assertArraysEqual(map(test2, num => Math.floor(num)), [2, 1, 3, 3, 4]);

const test3 = [[1], [2,1,1], [], "ss"];
assertArraysEqual(map(test3, num => num[0]), [1, 2, , "s"]);
