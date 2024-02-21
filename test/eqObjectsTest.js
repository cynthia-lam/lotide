const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

describe("#eqObjects", () => {
  it("returns true for shirtObject, anotherShirtObject", () => {
    assert.strictEqual(eqObjects(shirtObject , anotherShirtObject), true);
  });

  it("returns false for shirtObject, longSleeveShirtObject", () => {

    assert.strictEqual(eqObjects(shirtObject , longSleeveShirtObject), false); 
  });

  it("returns true for multiColorShirtObject, anotherMultiColorShirtObject", () => {
    assert.strictEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);
  });

  it("returns false for multiColorShirtObject, longSleeveMultiColorShirtObject", () => {
    assert.strictEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);
  });
});
