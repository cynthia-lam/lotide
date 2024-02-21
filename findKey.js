// helper function
const assertEqual = require('./assertEqual');


// main function
// takes in (object, callback) and return the first key for which 
// the callback returns a truthy value. no key => undefined

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

// test with two values that are the same
const test1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
assertEqual(findKey(test1, x => x.stars === 2), "noma");

// test w empty object
const testEmpty = {};
assertEqual(findKey(testEmpty, x => x.stars === 2), undefined);

// test w object where no values match
const testNoMatch = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
assertEqual(findKey(testNoMatch, x => x.stars === 4), undefined);

module.exports = findKey;