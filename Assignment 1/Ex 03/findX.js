"use strict";

var $ = function (id) {
  return document.getElementById(id);
};

var solve = function (a, b) {
  var message = "";

  if (a == 0 && b == 0) {
    message = "The equation has many infinitely many solutions";
  } else if (a == 0) {
    message = "The equation has no solution";
  } else {
    var result = (-b / a).toFixed(2);
    message = "The equation has 1 solution x = " + result;
  }

  return message;
};

var processEntries = function () {
  var a = parseFloat($("a").value);
  var b = parseFloat($("b").value);

  if (isNaN(a) || isNaN(b)) {
    $("error").innerHTML = "Please enter valid number!";
    $("result").innerHTML = "";
  } else {
    $("error").innerHTML = "";
    $("result").innerHTML = solve(a, b);
  }
};

onload = function () {
  $("solve").onclick = processEntries;
  $("a").focus();
};
