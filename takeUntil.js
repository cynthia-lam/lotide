// helper
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

//main function
const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    } else{
      break;
    }
  }
  return result;
};

// tests
test1 = [1, 2, 3, 4, 5];
assertArraysEqual(takeUntil(test1, (num => num > 4)), [1, 2, 3, 4]);

test2 = [];
assertArraysEqual(takeUntil(test2, (num => num > 4)), []);

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

module.exports = takeUntil;