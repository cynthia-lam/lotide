const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {

  const array1 = ['Hello', 'Lighthouse', 'Labs']
  const array2 = [...array1];
  const tailTest1 = tail(array1);
  const tailTest2 = tail([]);

  it("Should return Lighthouse", () => {
    assert.strictEqual(tailTest1[0], 'Lighthouse');
  });

  it("Should return Labs", () => {
    assert.strictEqual(tailTest1[1], 'Labs');
  });

  it("Should not have changed the array", () => {
    assert.deepEqual(array1, array2);
  });

  it("should return empty array", () => {
    assert.strictEqual(tailTest2.length, 0);
  })
});
