const assertEqual = require('../assertEqual');
const tail = require('../tail');

const array1 = ['Hello', 'Lighthouse', 'Labs']
const array2 = array1;
const tailTest1 = tail(array1);
assertEqual(tailTest1.length, 2);
assertEqual(tailTest1[0], 'Lighthouse');
assertEqual(tailTest1[1], 'Labs');
console.log('Checking if array is unchanged');
assertEqual(array1, array2);

console.log("Testing empty array");
const tailTest2 = tail([]);
assertEqual(tailTest2.length, 0);