var assert = require("assert")
var Task = require("../task")

describe ("Task", function() {
  var task1;

  beforeEach(function() {
    task1 = new Task("Save the World", 500, 10, 500);
  });

  it("should have a description", function() {
    assert.strictEqual(task1.description, "Save the World");
  });

  it("should have a difficulty level", function() {
    assert.strictEqual(task1.difficultyLevel, 500);
  });

  it("should have an urgency level", function() {
    assert.strictEqual(task1.urgencyLevel, 10);
  });

  it("should have a reward", function() {
    assert.strictEqual(task1.reward, 500);
  });

  it("should not be complete at start", function() {
    assert.strictEqual(task1.complete, false);
  });

  it("should be able to be marked as complete", function() {
    task1.completed();
    assert.strictEqual(task1.complete, true);
  })


})
