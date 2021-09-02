"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var triangle = function(number) {
    var result = "";
    for (var i = 1; i <= number; i++) {
        for (var j = 1; j <= i; j++) {
            result += "*";
        }
        result += "<br>";
    }
    return result;
};

var printTriangle = function() {
    var number = parseInt($("number").value);

    if (isNaN(number) || number < 0) {
        $("triangle").innerHTML = "";
        alert("Please enter an integer and greater than 0!");
    } else {
        $("triangle").innerHTML = triangle(number);
    }
};

window.onload = function() {
    $("submit").onclick = printTriangle;
    $("number").focus();
}