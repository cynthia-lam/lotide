const _ = require('lodash');

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

const tailTest1 = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(tailTest1.length, 2);
assertEqual(tailTest1[0], 'Lighthouse');
assertEqual(tailTest1[1], 'Labs');

const tailTest2 = tail([]);
assertEqual(tailTest2.length, 0);