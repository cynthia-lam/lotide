// helper function
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
};


// function implementation here
const countLetters = function(string) {
  let result = {};

  for (let letter of string) {
    if (letter !== " ") {
      if (result.hasOwnProperty(letter)) {
        result[letter]++;
      } else {
        result[letter] = 1;
      }
      console.log(result);
    }  
  }

  return result;
};

console.log(countLetters("lighthouse in the house"));