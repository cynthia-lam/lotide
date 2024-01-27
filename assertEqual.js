// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log('🛑 Assertion Failed');
  } else if (actual === expected) {
    console.log('✅ Assertion Passed');
  }
};

// TEST CODE

assertEqual(1, 1);