"use strict";

var $ = function (id) {
  return document.getElementById(id);
};

var calculate = function (math, physics, chemistry) {
  var averageGrade = (math + physics + chemistry) / 3;
  averageGrade = averageGrade.toFixed(2);
  var rank = "undefine";

  if (averageGrade >= 0 && averageGrade < 5) {
    rank = "D";
  } else if (averageGrade < 6.5) {
    rank = "C";
  } else if (averageGrade < 8) {
    rank = "B";
  } else if (averageGrade <= 10) {
    rank = "A";
  }

  $("result").innerHTML = "The average grade is " + averageGrade + " - rank " + rank;
};

var isNotValid = function (grade) {
  return isNaN(grade) || grade < 0 || grade > 10;
};

var processEntries = function () {
  var math = parseFloat($("math").value);
  var physics = parseFloat($("physics").value);
  var chemistry = parseFloat($("chemistry").value);

  if (isNotValid(math) || isNotValid(physics) || isNotValid(chemistry)) {
    $("error").innerHTML = "Please enter all 3 grades must be >=0 and <=10";
    $("result").innerHTML = "";
  } else {
    $("error").innerHTML = "";
    calculate(math, physics, chemistry);
  }
};

onload = function () {
  $("calculate").onclick = processEntries;
  $("math").focus();
};
