"use strict";

var $ = function (id) {
  return document.getElementById(id);
};

var print = function () {
  var a = 0;
  var b = 1;
  var dem = 2;
  var kq = a + " " + b;

  for (dem; dem < 20; dem++) {
    // b is sum of a vs b
    b += a;
    // a is given value of old b
    a = b - a;
    kq += " " + b;
  }

  $("fibonacci").innerHTML = kq;
};

window.onload = function () {
  this.print();
};