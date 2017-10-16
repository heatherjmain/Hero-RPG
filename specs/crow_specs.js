var assert = require("assert")
var Crow = require("../crow")
var Food = require("../food")
var Hero = require("../hero")

describe ("Crow", function() {
  var crow1;
  var hero1;
  var banana;
  var tomato;

  beforeEach(function() {
    crow1 = new Crow("Crow");
    hero1 = new Hero("Bananaman", 150, "banana", 20);
    banana = new Food("banana", 10);
    tomato = new Food("tomato", 7);
  });

  it("should have a name", function() {
    assert.strictEqual(crow1.name, "Crow");
  });

  it("should be able to collect food and place in hero's backpack", function() {
    crow1.collectFood(hero1, banana);
    crow1.collectFood(hero1, tomato);
    assert.deepStrictEqual(hero1.backpack, [banana, tomato]);
  });

  it("should only be able to place 5 items in backpack", function() {
    crow1.collectFood(hero1, banana);
    crow1.collectFood(hero1, tomato);
    crow1.collectFood(hero1, banana);
    crow1.collectFood(hero1, tomato);
    crow1.collectFood(hero1, banana);
    crow1.collectFood(hero1, tomato);
    assert.strictEqual(hero1.backpack.length, 5);
  });


})
