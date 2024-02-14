// The middle function should return an array with only the middle element(s) 
// of the provided array. This means that the length of the returned elements 
// could vary.

// one or two elements => empty array
// odd number => one item 
// even number => two items 
const middle = function(array) {
  if (array.length < 3) {                 // length of 0, 1, or 2
    return [];
  } else if (array.length % 2 === 1) {    // odd
    let middleIndex = Math.floor(array.length/2)
    return array.slice(middleIndex, middleIndex + 1);
  } else {    // even
    let middleIndex = array.length/2
    return array.slice(middleIndex - 1, middleIndex + 1);
  }
};

module.exports = middle;
