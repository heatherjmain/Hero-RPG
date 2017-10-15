var assert = require("assert")
var Hero = require("../hero")
var Food = require("../food")
var Task = require("../task")
var Rat = require("../rat")


describe("Hero", function() {
  var hero1;
  var banana;
  var tomato;
  var task1;
  var task2;
  var task3;
  var rat1;

  beforeEach(function() {
    hero1 = new Hero("Bananaman", "banana");
    banana = new Food("banana", 10);
    tomato = new Food("tomato", 7);
    task1 = new Task("Save the World", 500, 10, 500);
    task2 = new Task("Buy bananas", 10, 50, 10);
    task3 = new Task("Fight Super Enemy", 250, 30, 250);
    rat1 = new Rat("Rattus");
  });

  it("sould have a name", function() {
    assert.strictEqual(hero1.name, "Bananaman");
  });

  it("should have a health value", function() {
    assert.strictEqual(hero1.health, 100);
  });

  it("should have a favourite food", function() {
    assert.strictEqual(hero1.favouriteFood, "banana");
  });

  it("should have no tasks at start", function() {
    assert.strictEqual(hero1.tasks.length, 0);
  });

  it("should be able to talk", function() {
    assert.strictEqual(hero1.talk(), "I am Bananaman.  Ever alert for the call to action");
  });

  it("should be able to eat food and increase health by replensihment value", function() {
    hero1.eat(tomato);
    assert.strictEqual(hero1.health, 107);
  });

  it("should increase health by 1.5 x replenishment value if food is favourite food", function() {
    hero1.eat(banana);
    assert.strictEqual(hero1.health, 115);
  });

  it("should be able to add task", function() {
    hero1.addTask(task1);
    assert.strictEqual(hero1.tasks.length, 1);
    assert.strictEqual(hero1.tasks[0].description, "Save the World");
  });

  it("should be able to sort tasks by difficulty", function() {
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.addTask(task3);
    hero1.sortTasks('difficultyLevel');
    assert.deepStrictEqual(hero1.tasks, [task2, task3, task1]);
  })

  it("should be able to sort tasks by urgency", function() {
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.addTask(task3);
    hero1.sortTasks('urgencyLevel');
    assert.deepStrictEqual(hero1.tasks, [task1, task3, task2]);
  })

  it("should be able to sort tasks by reward", function() {
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.addTask(task3);
    hero1.sortTasks('reward');
    assert.deepStrictEqual(hero1.tasks, [task2, task3, task1]);
  });

  it("should be able to complete a task and earn xpPoints", function() {
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.addTask(task3);
    hero1.completeTask(task1);
    assert.strictEqual(hero1.tasks[0].complete, true);
    assert.strictEqual(hero1.xpPoints, 500);
  });

  it("should be able to view all complete tasks", function() {
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.addTask(task3);
    hero1.completeTask(task1);
    hero1.completeTask(task2);
    assert.deepStrictEqual(hero1.viewCompleteOrIncompleteTasks(true), [task1, task2]);
  });

  it("should be able to view all incomplete tasks", function() {
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.addTask(task3);
    hero1.completeTask(task1);
    hero1.completeTask(task2);
    assert.deepStrictEqual(hero1.viewCompleteOrIncompleteTasks(false), [task3]);
  });

  it("should lose health when consuming poisonous food", function() {
    rat1.touchFood(banana);
    rat1.touchFood(tomato);
    hero1.eat(banana);
    hero1.eat(tomato);
    assert.strictEqual(hero1.health, 83);
  });




})
