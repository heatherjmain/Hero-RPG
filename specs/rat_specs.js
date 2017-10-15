var assert = require("assert")
var Rat = require("../rat")
var Food = require("../food")

describe ("Rat", function() {
  var rat1;
  var banana;
  var tomato;

  beforeEach(function() {
    rat1 = new Rat("Rattus");
    banana = new Food("banana", 10);
    tomato = new Food("tomato", 7);
  });

  it("should have a name", function() {
    assert.strictEqual(rat1.name, "Rattus");
  });

  it("should be able to touch food and reduce replenishment value to negative value", function() {
    rat1.touchFood(banana);
    rat1.touchFood(tomato);
  assert.strictEqual(banana.replenishmentValue, -10);
  assert.strictEqual(tomato.replenishmentValue, -7);
  })



})
