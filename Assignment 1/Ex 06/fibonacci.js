"use strict";

var $ = function (id) {
  return document.getElementById(id);
};

var print = function () {
  var a = 0;
  var b = 1;
  var count = 2;
  var result = a + " " + b;

  for (count; count < 20; count++) {
    // b is sum of a vs b
    b += a;
    // a is given value of old b
    a = b - a;
    result += " " + b;
  }

  $("fibonacci").innerHTML = result;
};

onload = function () {
  this.print();
};
