var Crow = function(name) {
  this.name = name;
}

Crow.prototype.collectFood = function(hero, food) {
  if (hero.backpack.length < 5) {
    hero.backpack.push(food);
  }
};

module.exports = Crow;
