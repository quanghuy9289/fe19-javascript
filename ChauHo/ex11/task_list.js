"use strict";
const $ = function (id) {
  return document.getElementById(id);
};

const addToTaskList = function () {
  const taskTextbox = $("task");
  const newTask = new Task(taskTextbox.value);
  if (newTask.isValid()) {
    tasklist.add(newTask);
    tasklist.save();
    tasklist.display();
    taskTextbox.value = "";
  } else {
    alert("Please enter a task.");
  }
  taskTextbox.focus();
};

const clearTaskList = function () {
  tasklist.clear();
  $("task").focus();
};

const deleteFromTaskList = function () {
  tasklist.delete(this.title); // 'this' = clicked link
  tasklist.save();
  tasklist.display();
  $("task").focus();
};

const editTaskListItem = function () {
  const newVal = prompt("New tasks?");
  tasklist.edit(this.title, newVal).save().display();

  // tasklist.save();
  // tasklist.display();
  $("tasks").focus();
};

window.onload = function () {
  $("add_task").onclick = addToTaskList;
  $("clear_tasks").onclick = clearTaskList;

  tasklist.displayDiv = $("tasks");
  tasklist.deleteClickHandler = deleteFromTaskList;
  tasklist.editClickHandler = editTaskListItem;

  tasklist.load();
  tasklist.display();

  $("task").focus();
};
