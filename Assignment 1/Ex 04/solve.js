"use strict";

var $ = function (id) {
  return document.getElementById(id);
};

var solve = function (a, b, c) {
  var message = "";
  var result;

  if (a == 0) {
    if (b == 0 && c == 0) {
      message = "The equation has many infinitely many solutions";
    } else if (b == 0) {
      message = "The equation has no solution";
    } else {
      result = (-c / b).toFixed(2);
      message = "The equation has 1 solution x = " + result;
    }
  } else {
    var delta = b * b - 4 * a * c;
    if (delta < 0) {
      message = "The equation has no solution";
    } else if (delta == 0) {
      result = -b / (2 * a);
      message = "The equation has 1 solution x = " + result.toFixed(2);
    } else {
      var x1 = (-b + Math.sqrt(delta)) / (2 * a);
      var x2 = (-b - Math.sqrt(delta)) / (2 * a);

      message = "The equation has 2 solutions x1 = " + x1.toFixed(2) + "; x2 = " + x2.toFixed(2);
    }
  }

  return message;
};

var processEntries = function () {
  var a = parseFloat($("a").value);
  var b = parseFloat($("b").value);
  var c = parseFloat($("c").value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    $("error").innerHTML = "Please enter valid number!";
    $("result").innerHTML = "";
  } else {
    $("error").innerHTML = "";
    $("result").innerHTML = solve(a, b, c);
  }
};

onload = function () {
  $("solve").onclick = processEntries;
  $("a").focus();
};
