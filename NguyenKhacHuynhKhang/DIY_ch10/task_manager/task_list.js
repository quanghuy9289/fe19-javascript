'use-strick'
var $ = document.getElementById.bind(document)
var tasks = [];
var displayTaskList = function() {
    if(tasks.length ===0) {
        tasks = getStorage('tasks')
    }
    displaySortedTaskList(tasks, $('tasks'),deleteFromTaskList)
    $('task').focus()
}
var addToTaskList = function() {
    var task = $('task').value;
    if(task === '') {
        alert('Please enter a task')
    } else {
        tasks.push(capitalizeTask(task))
        setStorage('tasks', tasks)
        displaySortedTaskList()
        task = '';
    }
}
var deleteFromTaskList = function() {
    deleteTask(tasks, this.id);
    setStorage('tasks', tasks);
    displayTaskList();
}
var clearTaskList = function() {
    tasks.length = 0;
    clearStorage('tasks');
    $('tasks').value = '';
    $('task').focus()
}
window.onload = function() {
    $("add_task").onclick = addToTaskList;
    $("clear_tasks").onclick = clearTaskList;   
    displayTaskList();
}
