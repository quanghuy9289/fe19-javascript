"use strict";

const query = function (id) {
  return document.getElementById(id);
};

const calculateFV = function (investment, rate, years) {
  let futureVal = investment;
  for (let year = 0; year < years; year++) {
    futureVal = futureVal + (futureVal * rate) / 100;
  }
  return futureVal.toFixed(2);
};

const processEntries = function () {
  const investment = parseFloat(query("investment").value);
  const rate = parseFloat(query("annual_rate").value).toFixed(1);
  const years = parseFloat(query("years").value);

  if (isNaN(investment) || investment < 0 || investment > 100000) {
    query("investment_error").firstChild.nodeValue =
      "Investment must between 0 and 100,000";
  } else if (isNaN(rate) || rate <= 0 || rate > 15) {
    query("rate_error").lastChild.nodeValue = "Rate must between 0 and 15";
    query("investment_error").firstChild.nodeValue = ``;
  } else if (isNaN(years) || years <= 0 || years > 50) {
    query("years_error").firstChild.nodeValue = "Years must between 0 and 50";
    query("rate_error").firstChild.nodeValue = ``;
  } else {
    query("investment_error").firstChild.nodeValue = ``;
    query("rate_error").firstChild.nodeValue = ``;
    query("years_error").firstChild.nodeValue = ``;
    query("future_value").value = calculateFV(investment, rate, years);
  }
};

const clearEntries = function () {
  query("investment").value = null;
  query("annual_rate").value = null;
  query("years").value = null;
  query("future_value").value = null;
};

query("calculate").addEventListener("click", processEntries);
query("clear").addEventListener("click", clearEntries);
