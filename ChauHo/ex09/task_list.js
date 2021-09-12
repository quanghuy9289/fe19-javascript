"use strict";
const $ = function (id) {
  return document.getElementById(id);
};

let tasks = [];
const sortDirection = "ASC";

const displayTaskList = function () {
  let list = "";
  // if there are no tasks in tasks array, check storage
  if (tasks.length === 0) {
    // get tasks from storage or empty string if nothing in storage
    const storage = localStorage.getItem("tasks") || "";

    // if not empty, convert to array and store in global tasks variable
    if (storage.length > 0) {
      tasks = storage.split("|");
    }
  }

  // if there are tasks in array, sort and create tasks string
  if (tasks.length > 0) {
    list = tasks.join("\n");
  }
  // display tasks string and set focus on task text box
  $("task_list").value = list;
  $("task").focus();
};

const addToTaskList = function () {
  const task = $("task");
  if (task.value === "") {
    alert("Please enter a task.");
  } else {
    // add task to array and local storage
    tasks.push(task.value);
    localStorage.tasks = tasks.join("|");

    // clear task text box and re-display tasks
    task.value = "";
    displayTaskList();
  }
};

const clearTaskList = function () {
  tasks.length = 0;
  localStorage.tasks = "";
  $("task_list").value = "";
  $("task").focus();
};

const deleteTask = function () {
  const num = Number(prompt("What's task to delete?"));

  tasks.splice(num - 1, 1);

  localStorage.tasks = tasks.join("|");

  $("task").value = "";
  displayTaskList();
};

const toggleSort = function () {
  tasks.sort((a, b) => a - b);
  tasks.sort();

  displayTaskList();
};

const setName = function () {
  if (tasks.length !== 0) {
    const num = Number(prompt("What's task to rename?"));
    const val = prompt("What's new name?");

    tasks.splice(num - 1, 1, val);
    localStorage.tasks = tasks.join("|");

    displayTaskList();
  } else {
    alert("No tasks!");
  }
};

const filterTasks = function () {};

window.onload = function () {
  $("add_task").onclick = addToTaskList;
  $("clear_tasks").onclick = clearTaskList;
  $("delete_task").onclick = deleteTask;
  $("toggle_sort").onclick = toggleSort;
  $("set_name").onclick = setName;
  $("filter_tasks").onclick = filterTasks;
  displayTaskList();
};
