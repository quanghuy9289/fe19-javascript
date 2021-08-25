"use strict";
var $ = function (id) {
  return document.getElementById(id);
};

var addToTaskList = function () {
  var taskTextbox = $("task");
  //   var newTask = new Task(taskTextbox.value);
  var newTask = getTask(taskTextbox.value);
  if (newTask.isValid()) {
    tasklist.add(newTask).save().display();
    taskTextbox.value = "";
  } else {
    alert("Please enter a task.");
  }
  taskTextbox.focus();
};

var clearTaskList = function () {
  tasklist.clear();
  $("task").focus();
};

var deleteFromTaskList = function () {
  tasklist.delete(this.title).save().display();
  $("task").focus();
};

var editTaskListItem = function () {
  var newTaskName = prompt("Enter new task", tasklist.tasks[this.title]);

  //   var newTask = new Task(newTaskName);
  var newTask = getTask(newTaskName);
  if (newTask.isValid()) {
    tasklist.edit(this.title, newTask).save().display();
    $("task").focus();
  } else {
    alert("Please enter a task");
  }
};
window.onload = function () {
  $("add_task").onclick = addToTaskList;
  $("clear_tasks").onclick = clearTaskList;

  tasklist.displayDiv = $("tasks");
  tasklist.deleteClickHandler = deleteFromTaskList;
  tasklist.editClickHandler = editTaskListItem;

  tasklist.load().display();

  $("task").focus();
};
