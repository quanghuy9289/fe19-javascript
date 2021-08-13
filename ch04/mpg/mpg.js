"use strict";

function $(id) {
    return document.getElementById(id);
};

function calculateMpg(miles, gallons) {
    var mpg = (miles / gallons);
    mpg = mpg.toFixed(1);
    return mpg;
};

function processEntries() {
    var miles = parseFloat($("miles").value);
    var gallons = parseFloat($("gallons").value);

    if (isNaN(miles)) {
        $("miles_error").firstChild.nodeValue = "Miles must be numeric.";
    } else if (miles <= 0) {
        $("miles_error").firstChild.nodeValue = "Miles must be greater than zero.";
    }
    if (isNaN(gallons)) {
        $("gallons_error").firstChild.nodeValue = "Gallons must be numeric.";
    } else if (gallons <= 0) {
        $("gallons_error").firstChild.nodeValue = "Gallons must be greater than zero.";
    } else {
        $("miles_error").firstChild.nodeValue = "";
        $("gallons_error").firstChild.nodeValue = "";
        $("mpg").value = calculateMpg(miles, gallons);
    }
};

function clearEntries() {
    $("miles").value = "";
    $("gallons").value = "";
    $("mpg").value = "";
    $("miles_error").firstChild.nodeValue = "*";
    $("gallons_error").firstChild.nodeValue = "*";
};

window.onload = function() {
    $("calculate").onclick = processEntries;
    $("clear_entries").onclick = clearEntries;
    $("miles").focus();
};