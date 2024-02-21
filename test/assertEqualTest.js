const assertEqual = require('../assertEqual');

assertEqual(1, 1); //pass
assertEqual(1, '1'); //fail
assertEqual(1, 2); //fail
assertEqual('2', '2'); //pass


// if it returned something:
// describe("#assertEqual", () => {
//   it("returns true for 1, 1", () => {
//     assert.strictEqual(assertEqual(1, 1), true);
//   });
//   it("returns false for 1, '1'", () => {
//     assert.strictEqual(assertEqual(1, '1'), true);
//   });
//   it("returns false for 1, 2", () => {
//     assert.strictEqual(assertEqual(1, 2), true);
//   });
//   it("returns true for '2', '2'", () => {
//     assert.strictEqual(assertEqual('2', '2'), true);
//   });
// });
