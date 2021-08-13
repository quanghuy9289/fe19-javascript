function $(id) {
  return document.getElementById(id);
}

function calculateFV(investment, rate, years) {
   var futureValue = investment;
   for (var i = 1; i <= years; i++) {
     futureValue = futureValue + (futureValue*rate) / 100;
   }
   futureValue = futureValue.toFixed(2);
   return futureValue;
}

var processEntries = function () {
  "use strict";
  var investment = parseFloat($("investment").value);
  var rate = parseFloat($("annual_rate").value);
  var years = parseFloat($("years").value);
  var isValid = true;

  // validation for date entries
  if(isNaN(investment) || investment <= 0 || investment > 100000) {
    $("investment_error").firstChild.nodeValue = "Must be greater than 0 and less than or equal to 100,000";
    isValid = false;
  } else {
    $("investment_error").firstChild.nodeValue = "";
  }
  if (isNaN(rate) || rate <= 0 || rate > 15) {
    $("rate_error").firstChild.nodeValue = "Must be greater than 0 and less than or equal to 15";
    isValid = false;
  } else {
    $("rate_error").firstChild.nodeValue = "";
  }
  if (isNaN(years) || years <=0 || years > 50) {
    $("years_error").firstChild.nodeValue = "Must be greater than 0 and less than or equal to 50";
  } else {
    $("years_error").firstChild.nodeValue = "";
  }
  if (isValid = true) {
    $("future_value").value = calculateFV(investment, rate, years);
  }
}

window.onload = function () {
  $("calculate").onclick = processEntries;
  $("investment").focus();
}
