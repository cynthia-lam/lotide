// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

// TEST CODE

assertEqual(1, 1);
assertEqual(1, '1');
assertEqual(1, 2);
assertEqual('2', '2');