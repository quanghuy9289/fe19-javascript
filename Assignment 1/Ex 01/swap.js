"use strict";

var $ = function (id) {
  return document.getElementById(id);
};

var swap = function () {
  var a = parseFloat($("a").value);
  var b = parseFloat($("b").value);

  if (Number.isInteger(a) && Number.isInteger(b)) {
    $("a").value = b;
    $("b").value = a;
    $("error").innerHTML = "";
  } else {
    $("error").innerHTML = "Both a and b have to be integers!";
  }
};

onload = function () {
  $("swap").onclick = swap;
  $("a").focus();
};
