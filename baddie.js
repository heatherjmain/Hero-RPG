var Baddie = function(name, damageValue) {
  this.name = name;
  this.health = 100;
  this.damageValue = damageValue;
};

Baddie.prototype.talk = function() {
  return "All fear, the mighty " + this.name;
}

Baddie.prototype.attack = function(hero) {
  var hitValue = (this.health / 100) * this.damageValue
    hero.health -= hitValue;
    if (hero.health <= 0) {
      return "Victory, " + hero.name + " has perished!"
    }
}

module.exports = Baddie;
