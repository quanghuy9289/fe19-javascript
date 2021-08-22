"use strict";

var $ = function (id) {
  return document.getElementById(id);
};

var triangle = function (number) {
  var result = "";
  for (var i = 1; i <= number; i++) {
    for (var j = 1; j <= i; j++) {
      result += "*";
    }
    result += "<br />";
  }
  return result;
};

var processEntries = function () {
  var number = parseFloat($("number").value);

  if (Number.isInteger(number)) {
    $("triangle").innerHTML = triangle(number);
    $("error").innerHTML = "";
  } else {
    $("triangle").innerHTML = "";
    $("error").innerHTML = "Please enter an integer.";
  }
};

onload = function () {
  $("result").onclick = processEntries;
  $("number").focus();
};
