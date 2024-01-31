const inspect = require('util').inspect;

// helper functions
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// for our purposes, only doing two things:
// if same length of keys + each keys' value is the same 
const eqObjects = function(object1, object2) {
  // if the length isn't the same => return false
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  // if the value for a key in object1 !== value for that key in object 2 => false
  for (let key of Object.keys(object1)) {
    // if it's array use this comparison
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else { // else if its primitive use this option
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
assertObjectsEqual(shirtObject , anotherShirtObject); // => true
