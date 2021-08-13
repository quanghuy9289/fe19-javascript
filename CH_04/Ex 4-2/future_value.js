"use strict";

var $ = function (id) {
  return document.getElementById(id);
};

var calculateFV = function (investment, rate, years) {
  var total = investment;
  for (var i = 0; i < years; i++) {
    total += (total * rate) / 100;
  }

  total = total.toFixed(2);
  return total;
};

var processEntries = function () {
  var investment = parseFloat($("investment").value);
  var rate = parseFloat($("annual_rate").value);
  var years = parseInt($("years").value);
  var isValid = true;

  //validate investment
  if (isNaN(investment)) {
    $("investment_error").firstChild.nodeValue = "This field must be a valid number";
    isValid = false;
  } else if (investment <= 0 || investment > 100000) {
    $("investment_error").firstChild.nodeValue =
      "The investment must be greater than 0 and smaller than or equal 100000";
    isValid = false;
  } else {
    $("investment_error").firstChild.nodeValue = "";
  }

  //validate annual rate
  if (isNaN(rate)) {
    $("rate_error").firstChild.nodeValue = "This field must be a valid number";
    isValid = false;
  } else if (rate <= 0 || rate > 15) {
    $("rate_error").firstChild.nodeValue = "The annual rate must be greater than 0 and smaller than or equal 15";
    isValid = false;
  } else {
    $("rate_error").firstChild.nodeValue = "";
  }

  //validate years
  if (isNaN(years)) {
    $("years_error").firstChild.nodeValue = "This field must be a valid number";
    isValid = false;
  } else if (years <= 0 || years > 50) {
    $("years_error").firstChild.nodeValue = "The years must be greater than 0 and smaller than or equal 50";
    isValid = false;
  } else {
    $("years_error").firstChild.nodeValue = "";
  }

  //Calculate
  if (isValid) {
    $("future_value").value = calculateFV(investment, rate, years);
  }
};

onload = function () {
  $("calculate").onclick = processEntries;
  $("investment").focus();
};
