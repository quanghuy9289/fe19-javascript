"use strict";

var $ = function (id) {
  return document.getElementById(id);
};

var findSum = function () {
  var s = 0;
  for (var i = 1; i <= 50; i++) {
    s += i;
  }
  $("sum").innerHTML = s;
};

onload = function () {
  findSum();
};
