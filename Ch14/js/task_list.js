"use strict";
var $ = function(id) {
    return document.getElementById(id);
}
var tasklist;
var addToTaskList = function() {
    var taskTextbox = $("task");
    var newTask = new Task(taskTextbox.value);
    if (newTask.isValid()) {
        tasklist.add(newTask).save().display();
        taskTextbox.value = "";
    } else {
        alert("Please enter a task");
    }
    taskTextbox.focus();
}
var deleteFromTaskList = function() {
    tasklist.delete(this.title).save().display();
    $("task").focus();
}
var clearTaskList = function() {
    tasklist.clear();
    $("task").focus();
}
var boldExclamationPoint = function bold (node) {
    if (node.childNodes && node.childNodes.length > 0) {
        for (var i in node.childNodes) {
            bold(node.childNodes[i]);
        }
    } else {
        if (node.nodeValue && node.nodeValue.indexOf("!") > -1) {
            var span = node.parentNode;
            span.innerHTML = "<b>" + node.nodeValue + "</b>";
        }
    }
}
window.onload = function() {
    $("add_task").onclick = addToTaskList;
    $("clear_tasks").onclick = clearTaskList;
    $("bold").onclick = function() {
        boldExclamationPoint($("tasks"));
    }
    // tasklist.displayDiv = $("tasks");
    // tasklist.deleteClickHandler = deleteFromTaskList;
    // tasklist.editClickHandler = editFromTaskList;
    // tasklist.load().display();
    tasklist = createTaskList($("tasks"), deleteFromTaskList);
    tasklist.load().display();
    $("task").focus();
}