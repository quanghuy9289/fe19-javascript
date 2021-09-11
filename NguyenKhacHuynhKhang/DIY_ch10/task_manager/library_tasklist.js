var sortTaskList = function (tasks) {
  var isArray = Array.isArray(tasks);
  if (isArray) {
    tasks.sort();
  }
  return isArray;
};
var displaySortedTaskList = function (tasks, div, handler) {
  var isArray = sortTaskList(tasks);
  if (isArray) {
      var html ='';
    // var htmls = tasks.map((task, i) => {
    //   "<p><a id=" + i + ">Delete </a> +" + task + "</p>";
    // });
    // div.innerHTML = htmls.join("");
    // var links = div.getElementsByTagName("a");
    // for (var i in links) {
    //   links[i].onclick = handle;
    // }
    for (var i in tasks) {
        html = html.concat("<p>");
        html = html.concat("<a href='#' id='", i, "'>Delete</a>");
        html = html.concat(tasks[i]);
        html = html.concat("</p>");
    }
    div.innerHTML = html;
    
    // get links, loop and add onclick event handler
    var links = div.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = handler;
    }
  }
};
var deleteTask = function (tasks, i) {
  var isArray = sortTaskList(tasks);
  if (isArray) {
    tasks.splice(i, 1);
  }
};
var capitalizeTask = function (task) {
  var firstLetter = task.substring(0, 1);
  return firstLetter.toUpperCase() + task.substring(1);
};
