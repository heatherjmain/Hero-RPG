var Hero = function(name, favouriteFood) {
  this.name = name;
  this.health = 100;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}


Hero.prototype.talk = function(phrase) {
  return ("I am " + this.name + ".  Ever alert for the call to action")
}


Hero.prototype.eat = function(food) {
  var isFaveFood = (food.name === this.favouriteFood)

  if (isFaveFood) {
    this.health += (food.replenishmentValue * 1.5)
  } else {
  this.health += food.replenishmentValue;
  }
}


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




module.exports = Hero;
