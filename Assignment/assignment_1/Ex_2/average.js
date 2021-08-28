"use strict";

function $(id) {
    return document.getElementById(id);
}

function calculateAverage(math, physics, chemistry) {
    var average = (math + physics + chemistry) / 3;
    average = average.toFixed(1);
    return average;
}

var processEntries = function() {
    var math = parseFloat($("math").value);
    var physics = parseFloat($("physics").value);
    var chemistry = parseFloat($("chemistry").value);

    if (isNaN(math)) {
        $("math_error").firstChild.nodeValue = "Math scores must be numeric.";
    } else if (math < 0 || math > 10) {
        $("math_error").firstChild.nodeValue = "Math score must be greater than or equal to 0 and less than or equal to 10.";
    }
    if (isNaN(physics)) {
        $("physics_error").firstChild.nodeValue = "Physics score must be numeric.";
    } else if (physics < 0 || physics > 10) {
        $("physics_error").firstChild.nodeValue = "Physics score must be greater than or equal to 0 and less than or equal to 10.";
    }
    if (isNaN(chemistry)) {
        $("chemistry_error").firstChild.nodeValue = "Chemistry score must be numeric.";
    } else if (chemistry < 0 || chemistry > 10) {
        $("chemistry_error").firstChild.nodeValue = "Chemistry score must be greater than or equal to 0 and less than or equal to 10.";
    } else {
        $("math_error").firstChild.nodeValue = "";
        $("physics_error").firstChild.nodeValue = "";
        $("chemistry_error").firstChild.nodeValue = "";
        $("average").value = calculateAverage(math, physics, chemistry);
        var average = $("average").value;
        var rank = $("rank");
        if (average >= 8.0) {
            rank.value = "A";
        } else if (average >= 6.5 && average < 8.0) {
            rank.value = "B";
        } else if (average >= 5.0 && average < 6.5) {
            rank.value = "C";
        } else if (average >= 0 && average < 5.0) {
            rank.value = "D";
        } else {
            rank.value = "Invalid test score";
        }
    }
};

function clearEntries() {
    $("math").value = "";
    $("physics").value = "";
    $("chemistry").value = "";
    $("average").value = "";
    $("rank").value = "";
    $("math_error").firstChild.nodeValue = "*";
    $("physics_error").firstChild.nodeValue = "*";
    $("chemistry_error").firstChild.nodeValue = "*";
};

window.onload = function() {
    $("calculate").onclick = processEntries;
    $("clear_entries").onclick = clearEntries;
    $("math").focus();
};