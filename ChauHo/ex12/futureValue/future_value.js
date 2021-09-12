"use strict";
const $ = function (id) {
  return document.getElementById(id);
};

const calculateFV = function (investment, rate, years) {
  try {
    let futureValue = investment;
    for (let i = 1; i <= years; i++) {
      futureValue += (futureValue * rate) / 100;
    }
    futureValue = futureValue.toFixed(2);
    if (investment <= 0 || rate <= 0 || years <= 0)
      throw new Error("Please check your entries for validity.");
    return futureValue;
  } catch (err) {
    alert(err.message);
  }
};

const processEntries = function () {
  const investment = parseFloat($("investment").value);
  const rate = parseFloat($("annual_rate").value);
  const years = parseInt($("years").value);
  let allValid = true;

  if (isNaN(investment)) {
    $("investment_error").firstChild.nodeValue = "Must be number";
    allValid = false;
  } else {
    $("investment_error").firstChild.nodeValue = "";
  }
  if (isNaN(rate)) {
    $("rate_error").firstChild.nodeValue = "Must be number";
    allValid = false;
  } else {
    $("rate_error").firstChild.nodeValue = "";
  }
  if (isNaN(years)) {
    $("years_error").firstChild.nodeValue = "Must be number";
    allValid = false;
  } else {
    $("years_error").firstChild.nodeValue = "";
  }
  if (allValid) {
    $("future_value").value = calculateFV(investment, rate, years);
  }
};

window.onload = function () {
  $("calculate").onclick = processEntries;
  $("investment").focus();
};
