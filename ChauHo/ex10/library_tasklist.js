"use strict";
const sortTaskList = function (tasks) {
  const isArray = Array.isArray(tasks);
  if (isArray) {
    tasks.sort();
  }
  return isArray;
};

const displaySortedTaskList = function (tasks, div, handler) {
  let html = "";
  const isArray = sortTaskList(tasks);

  if (isArray) {
    //create and load html string from sorted array
    for (const i in tasks) {
      // html = html.concat("<p>");
      // html = html.concat("<a href='#' id='", i, "'>Delete</a>");
      // html = html.concat(tasks[i]);
      // html = html.concat("</p>");

      html += `<p><a href="#" id="${i}">Delete</a> <a href="#" title="${i}">Edit</a> ${tasks[i]} </p>`;
    }
    div.innerHTML = html;

    // get links, loop and add onclick event handler
    const links = div.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
      links[i].onclick = handler;
    }
  }
};

const deleteTask = function (tasks, i) {
  const isArray = sortTaskList(tasks);
  if (isArray) {
    tasks.splice(i, 1);
  }
};

const editTask = function (tasks, i, newText) {
  /* code goes here */
};

const capitalizeTask = function (task) {
  const first = task.substring(0, 1);
  return first.toUpperCase() + task.substring(1);
};
