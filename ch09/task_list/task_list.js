"use strict";
var $ = function(id) { return document.getElementById(id); };

var tasks = [];
var sortDirection = "ASC";

var displayTaskList = function() {
  var list = "";
  // if there are no tasks in tasks array, check storage
  if (tasks.length === 0) {
    // get tasks from storage or empty string if nothing in storage
    var storage = localStorage.getItem("tasks") || "";

    // if not empty, convert to array and store in global tasks variable
    if (storage.length > 0) { 
      tasks = storage.split("|"); 
    }
  }
  
  // if there are tasks in array, sort and create tasks string
  if (tasks.length > 0) {
    // tasks.sort();
    if (sortDirection == "ASC") {
      tasks.sort();
    } else {
      tasks.reverse();
    }
    list = tasks.join("\n");
  }

  // get Name 
  var name = sessionStorage.name || "";
  $("name").innerHTML = name + "'s " || "";

  // display tasks string and set focus on task text box
  $("task_list").value = list;
  $("task").focus();
}

var addToTaskList = function() {   
  var task = $("task");
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
}

var clearTaskList = function() {
  tasks.length = 0;
  localStorage.tasks = "";
  $("task_list").value = "";
  $("task").focus();
}

var deleteTask = function() {
  var indexNumberTask = prompt("What is the index number of the task you want to delete?");
  if (!isNaN(indexNumberTask) && (indexNumberTask <= tasks.length) && (tasks)) {
    tasks.splice(indexNumberTask, 1);
  }
  localStorage.tasks = tasks.join("|");
  displayTaskList();
}

var toggleSort = function() {
  if (sortDirection == "ASC") {
    sortDirection = "DESC"
  } else if (sortDirection == "DESC") {
    sortDirection = "ASC"
  }
  displayTaskList();
}

var setName = function() {
  var name = prompt("What's your name?");
  sessionStorage.name = name;
  displayTaskList();
}

var importantTasks = function (element) {
  var lower = element.toLowerCase();
  var index = lower.indexOf("important!");
  if (index > -1 ) {
    return true
  } else {
    return false
  }
}

var filterTasks = function() { 
  var filtered = tasks.filter(importantTasks);

  $("task_list").value = filtered.join("\n");
}

window.onload = function() {
  $("add_task").onclick = addToTaskList;
  $("clear_tasks").onclick = clearTaskList;   
  $("delete_task").onclick = deleteTask;
  $("toggle_sort").onclick = toggleSort;
  $("set_name").onclick = setName;
  $("filter_tasks").onclick = filterTasks;
  displayTaskList();
}