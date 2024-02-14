const assertEqual = require('../assertEqual');
const tail = require('../tail');

const tailTest1 = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(tailTest1.length, 2);
assertEqual(tailTest1[0], 'Lighthouse');
assertEqual(tailTest1[1], 'Labs');

const tailTest2 = tail([]);
assertEqual(tailTest2.length, 0);