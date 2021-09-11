"use strict";

var $ = function (id) {
    return document.getElementById(id);
};

var triangle = function (number) {
    var display = "";
    for ( var i = 1; i <= number ; i++) {
        for (var j = 1; j <= (number - i); j++) {
            display += "&nbsp;&nbsp;";
        }
        for (var j = 1; j <= i; j++) {
            display += "*"
        }
        display += "<br />";
    }
    return display;
  };

var processEntry = function () {
    var number = parseInt($("number").value);

    if(Number.isInteger(number)) {
        $("display").innerHTML = triangle(number);
        $("error").innerHTML = "";
    } else {
        $("display").innerHTML = "";
        $("error").innerHTML = "Enter an integer number";
    }
};

window.onload = function() {
    $("start").onclick = processEntry;
    $("number").focus;
}