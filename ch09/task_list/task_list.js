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
        if (storage.length > 0) { tasks = storage.split("|"); }
    }

    // if there are tasks in array, sort and create tasks string
    if (tasks.length > 0) {
        (sortDirection === "ASC") ? tasks.sort(): tasks.reverse();
        list = tasks.join("\n");
    }
    // display tasks string and set focus on task text box
    $("task_list").value = list;
    $("task").focus();

    var session = sessionStorage.getItem("Name");
    $("name").firstChild.nodeValue = (session === null || session === "") ? "Tasks" : session + "\'s Tasks"
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
    var deleteTaskList = prompt("What the index number of the task to delete?")
    if (!isNaN(deleteTaskList) && deleteTaskList >= 0) {
        tasks.splice(deleteTaskList, 1);
        localStorage.tasks = tasks.join("|");
        displayTaskList();
    }
}

var toggleSort = function() {
    sortDirection = (sortDirection === "ASC") ? "DESC" : "ASC";
    displayTaskList();
}

var setName = function() {
    var nameTask = prompt("What is your name?");
    sessionStorage.setItem("Name", nameTask);
    displayTaskList();
}

var importantTasks = function(element) {
    var lower = element.toLowerCase();
    var index = lower.indexOf("important!");
    element = (index !== -1) ? true : false;
    return element;
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