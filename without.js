// old helper functions 
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