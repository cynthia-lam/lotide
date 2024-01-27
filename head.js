const _ = require('lodash');

// assertEqual function
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

// assertEqual tests

// assertEqual(1, 1);
// assertEqual(1, '1');
// assertEqual(1, 2);
// assertEqual('2', '2');

// head function - returns the first item of an array
const head = function(array) {
  return array[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");