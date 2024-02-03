// helper
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

//main function
const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    } else{
      break;
    }
  }
  return result;
};

test1 = [1, 2, 3, 4, 5];
assertArraysEqual(takeUntil(test1, (num => num > 4)), [1, 2, 3, 4]);

test2 = [];
assertArraysEqual(takeUntil(test2, (num => num > 4)), []);

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);