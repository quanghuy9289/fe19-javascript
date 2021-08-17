"use strict";

function $(id) {
    return document.getElementById(id);
};

function calculateFV(investment, years, rate) {
    var futurevalue = investment;
    for (var i = 1; i <= years; i++) {
        futurevalue += futurevalue * rate / 100;
    }
    futurevalue = futurevalue.toFixed(2);
    return futurevalue;
};

var processEntry = function () {
    var investment = parseFloat($("investment").value);
    var rate = parseFloat($("rate").value);
    var years = parseInt($("years").value);
    var isValid = true;

    if (isNaN(investment) || investment <= 0 || investment > 100000) {
        $("investment_error").firstChild.nodeValue = " 0 < Investment <= 100000";
        isValid = false;
    } else {
        $("investment_error").firstChild.nodeValue = "";
    }
    if (isNaN(rate) || rate <= 0 || rate > 15) {
        $("rate_error").firstChild.nodeValue = " 0 < Rate <= 15";
        isValid = false;
    } else {
        $("rate_error").firstChild.nodeValue = "";
    }
    if (isNaN(years) || years <= 0 || years > 50) {
        $("years_error").firstChild.nodeValue = " 0 < Years <= 50";
        isValid = false;
    } else {
        $("years_error").firstChild.nodeValue = "";
    }

    if (isValid) {
        $("future_value").value = calculateFV(investment, years, rate);
    }


};




window.onload = function () {
    $("calculate").onclick = processEntry;
    $("investment").focus();
};