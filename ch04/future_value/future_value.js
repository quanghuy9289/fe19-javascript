"use strict"

var $ = function(id) {
    return document.getElementById(id);
};


var calculateRate = function(invest, rate, year) {
    var futureValue = invest
    for ( var i = 1; i <= year; i++) {
         futureValue += futureValue * rate / 100;
    }
    futureValue = futureValue.toFixed(2);
    return futureValue;
};

var processEntries = function() {
    var invest = parseFloat($("investment").value);
    var rate = parseFloat($("annual_rate").value);
    var year = parseInt($("years").value);

    $("future_value").value = calculateRate(invest, rate, year);
};

window.onload = function() {
    $("calculate").onclick = processEntries;
    $("investment").focus();
};