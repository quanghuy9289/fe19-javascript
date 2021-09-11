"use strict";

var $ = function (id) {
  return document.getElementById(id);
};

var calculate = function (a, b) {
    var temp;
    while(b != 0) {
        temp = a % b;
        a = b;
        b = temp;
    }
    return a;
};

var processEntry = function () {
    var a = parseInt($("a").value);
    var b = parseInt($("b").value);

    if (Number.isInteger(a) && Number.isInteger(b)) {
        $("gcd").value = calculate(a, b);
        $("error").innerHTML = "";
    } else {
        $("gcd").value = "";
        $("error").innerHTML = "Enter 2 integer number.";
    }
};

window.onload = function() {
    $("cal").onclick = processEntry;
    $("a").focus();
}