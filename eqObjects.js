// helper functions
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// FUNCTION IMPLEMENTATION
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

module.exports = eqObjects;