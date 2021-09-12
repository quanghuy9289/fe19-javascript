"use strict";

var $ = function (id) {
  return document.getElementById(id);
};

var sumInt = function () {
  var sum = 0;
  for (var i = 1; i <= 50; i++) {
    sum += i;
  }
  $("sumint").innerHTML = sum;
};

window.onload = function () {
  sumInt();
};
