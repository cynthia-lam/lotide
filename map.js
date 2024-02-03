// helper functions

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
    
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
        return false;
    }
  }
  
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

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
