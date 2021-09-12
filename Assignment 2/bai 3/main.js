"use strict";

var $ = function (id) {
  return document.getElementById(id);
};

var namesList = [];

var sortByAscending = function (names) {
  namesList = names.split(",");
  namesList.sort();
};

var processEntry = function () {
  var names = $("names").value;
  if (names === "") {
    $("error").innerHTML = "The list of names is blank";
    return;
  }
  $("error").innerHTML = "";
  sortByAscending(names);
  $("result").innerHTML = "The list after sorting by ascending:<br/>" + namesList.toString();
};

window.onload = function () {
  $("sort").onclick = processEntry;
  $("names").focus();
};