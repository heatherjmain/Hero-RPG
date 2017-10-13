var Task = function(description, difficultyLevel, urgencyLevel, reward) {
  this.description = description;
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.complete = false;
}

Task.prototype.completed = function() {
  return this.complete = true;
}

module.exports = Task;
