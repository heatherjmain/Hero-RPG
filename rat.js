var Rat = function(name) {
  this.name = name;
}

Rat.prototype.touchFood = function(food) {
  food.replenishmentValue *= -1;
}


module.exports = Rat;
