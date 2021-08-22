"use strict";

var $ = function (id) {
  return document.getElementById(id);
};

var findGCD = function (a, b) {
  if (b == 0) {
    return a;
  }
  return findGCD(b, a % b);
};

var processEntries = function () {
  var a = parseFloat($("a").value);
  var b = parseFloat($("b").value);

  if (Number.isInteger(a) && Number.isInteger(b)) {
    $("gcd").value = findGCD(a, b);
    $("error").innerHTML = "";
  } else {
    $("gcd").value = "";
    $("error").innerHTML = "Enter both a and b as integers, please!";
  }
};

onload = function () {
  $("result").onclick = processEntries;
  $("a").focus();
};
