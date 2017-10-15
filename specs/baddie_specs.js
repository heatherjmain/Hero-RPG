var assert = require("assert");
var Baddie = require("../baddie")
var Hero = require("../hero")

describe ("Baddie",function() {
  var baddie1;
  var hero1;

  beforeEach(function() {
    baddie1 = new Baddie("Appleman", 10);
    hero1 = new Hero("Bananaman", 150, "banana", 20);
  });

  it("should have a name", function() {
    assert.strictEqual(baddie1.name, "Appleman");
  });

  it("should be able to attack hero and reduce hero health", function() {
    baddie1.attack(hero1);
    assert.strictEqual(hero1.health, 90);
  });

  it("should die at 0 health", function() {
    hero1.attack(baddie1);
    hero1.attack(baddie1);
    hero1.attack(baddie1);
    hero1.attack(baddie1);
    assert.strictEqual(hero1.attack(baddie1), "Take that, Appleman!")
  })



})
