var assert = require("assert")
var Food = require("../food")

describe ("Food", function() {
  var banana;

  beforeEach(function() {
    banana = new Food("banana", 10);
  });

  it("should have a name", function() {
    assert.strictEqual(banana.name, "banana");
  });

  it("should have a replensihment value", function() {
    assert.strictEqual(banana.replenishmentValue, 10);
  });

})
