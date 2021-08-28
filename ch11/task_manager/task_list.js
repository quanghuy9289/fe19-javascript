"use strict";
var $ = function(id) { return document.getElementById(id); };

var addToTaskList = function() {
    var taskTextbox = $("task");
    var newTask = new Task(taskTextbox.value);
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

var clearTaskList = function() {
    tasklist.clear();
    $("task").focus();
};

var deleteFromTaskList = function() {
    tasklist.delete(this.title); // 'this' = clicked link
    tasklist.save();
    tasklist.display();
    $("task").focus();
};

var editTaskListItem = function() {
    var newText = getTask(prompt("Please enter the new text:"));
    if (newText) {
        tasklist.edit(tasklist.tasks, this.title, newText);
        tasklist.save();
        tasklist.display();
        $("task").focus();
    } else {
        alert("The text must be valid");
    }
};

window.onload = function() {
    $("add_task").onclick = addToTaskList;
    $("clear_tasks").onclick = clearTaskList;

    tasklist.displayDiv = $("tasks");
    tasklist.deleteClickHandler = deleteFromTaskList;
    tasklist.editClickHandler = editTaskListItem;

    tasklist.load();
    tasklist.display();

    $("task").focus();
};