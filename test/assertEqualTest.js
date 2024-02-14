const assertEqual = require('../assertEqual');

assertEqual(1, 1); //pass
assertEqual(1, '1'); //fail
assertEqual(1, 2); //fail
assertEqual('2', '2'); //pass