var Hero = function(name, fullHealth, favouriteFood, damageValue) {
  this.name = name;
  this.health = 100;
  this.fullHealth = fullHealth;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
  this.xpPoints = 0;
  this.damageValue = damageValue;
  this.backpack = [];
}


Hero.prototype.talk = function() {
  return ("I am " + this.name + ".  Ever alert for the call to action")
}


Hero.prototype.eat = function(food) {
  var foodIsInBackpack = this.backpack.indexOf(food);
  this.backpack.splice(foodIsInBackpack, 1);

  var isFaveFood = (food.name === this.favouriteFood)


  if (isFaveFood && food.replenishmentValue > 0) {
    this.health += (food.replenishmentValue * 1.5)
    if (this.health > this.fullHealth) {
      this.health = this.fullHealth;
    }
  } else {
  this.health += food.replenishmentValue;
    if (this.health > this.fullHealth) {
      this.health = this.fullHealth;
    }
  }

}


// Hero.prototype.eat = function(food) {
//   var foodIsInBackpack = this.backpack.indexOf(food);
//   this.backpack.splice(foodIsInBackpack, 1);
//
//   var isFaveFood = (foodIsInBackpack.name === this.favouriteFood)
//
//
//   if (isFaveFood && foodIsInBackpack.replenishmentValue > 0) {
//     this.health += (foodIsInBackpack.replenishmentValue * 1.5)
//     if (this.health > this.fullHealth) {
//       this.health = this.fullHealth;
//     }
//   } else {
//   this.health += foodIsInBackpack.replenishmentValue;
//     if (this.health > this.fullHealth) {
//       this.health = this.fullHealth;
//     }
//   }
//
// }






Hero.prototype.addTask = function(task) {
  this.tasks.push(task);
}


Hero.prototype.sortTasks = function(sortBy) {
  this.tasks.sort(function(task1, task2) {
    return task1[sortBy] - task2[sortBy];
  })
}


Hero.prototype.completeTask = function(taskToSearch) {
  var taskToComplete = this.tasks.find(function(task) {
    return task === taskToSearch;
  })
  taskToComplete.complete = true;
  this.xpPoints += taskToComplete.reward;
}


Hero.prototype.viewCompleteOrIncompleteTasks = function(requestedStatus) {
  var requestedTasks = [];

  this.tasks.forEach(function(isComplete) {
    if (isComplete.complete === requestedStatus) {
      requestedTasks.push(isComplete);
    }
  });
  return requestedTasks;
}

Hero.prototype.attack = function(baddie) {
  var hitValue = ((this.health / 100) * this.damageValue);
  baddie.health -= hitValue;
  if (baddie.health <= 0) {
    return "Take that, " + baddie.name + "!";
  }
}




module.exports = Hero;
