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
}

// The middle function should return an array with only the middle element(s) 
// of the provided array. This means that the length of the returned elements 
// could vary.

// one or two elements => empty array
// odd number => one item 
// even number => two items 
const middle = function(array) {
  if (array.length < 3) {                 // length of 0, 1, or 2
    return [];
  } else if (array.length % 2 === 1) {    // odd
    let middleIndex = Math.floor(array.length/2)
    return array.slice(middleIndex, middleIndex + 1);
  } else if (array.length % 2 === 0) {    // even
    let middleIndex = array.length/2
    return array.slice(middleIndex - 1, middleIndex + 1);
  }
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
