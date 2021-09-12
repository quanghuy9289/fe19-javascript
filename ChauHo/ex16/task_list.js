"use strict";
const $ = function (id) {
  return document.getElementById(id);
};

const addToTaskList = function () {
  const taskTextbox = $("task");
  const dateTextbox = $("date");
  const newTask = new Task(taskTextbox.value, dateTextbox.value);
  if (newTask.isValid()) {
    tasklist.add(newTask).save().load().display();
    taskTextbox.value = "";
    dateTextbox.value = "";
  } else {
    alert("Please enter a correct task or date.");
  }
  taskTextbox.focus();
};

const clearTaskList = function () {
  tasklist.clear();
  $("task").focus();
};

const deleteFromTaskList = function () {
  tasklist.delete(this.title).save().display(); // 'this' = clicked link
  $("task").focus();
};

window.onload = function () {
  $("add_task").onclick = addToTaskList;
  $("clear_tasks").onclick = clearTaskList;

  tasklist.displayDiv = $("tasks");
  tasklist.deleteClickHandler = deleteFromTaskList;

  tasklist.load().display();
  $("task").focus();
};
