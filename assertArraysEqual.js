const assertArraysEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
    
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
    } else {
      
    }
  }
  // need to move this so it doesnt print every time
  console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);  // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

assertArraysEqual([1, 3], [1, 2, 3]); // => false
assertArraysEqual([], []); // => true